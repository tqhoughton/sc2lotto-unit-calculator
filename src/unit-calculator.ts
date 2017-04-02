declare var unitData: any;

class Unit {
    constructor (public name: string, public race: string) {}
}

class Recipe extends Unit {
    constructor (name: string, race: string, public ingredients: Object, public tier: string) {
        super(name, race);
    }
	
	getRecipeUnits(unitType: string, unitArray:(Unit|Recipe)[]) {
		if (unitType == 'immediate') {
			return this.ingredients;
		} else if (unitType == 'basic') {
			let unitNode = new NodeItem(this, 1);
			let nodeList = unitNode.getDescendents(unitArray);
			return combineObjs(nodeList);
		} else if (unitType == 'magic') {
			let unitNode = new NodeItem(this, 1);
			let nodeList = unitNode.getDescendents(unitArray, true);
			return combineObjs(nodeList);
		}
	}
}

class NodeItem {
	constructor (public unit: (Unit|Recipe), public modifier: Number) {}
	
	getChildNodes(unitArray:(Unit|Recipe)[]) {
		let ingredients = (this.unit as Recipe).ingredients;
		if (!ingredients) {
			return false;
		}
		let childNodes: NodeItem[] = [];
		let unitNames = unitArray.map(function(x) {return x.name});
		for (var ingredient in ingredients) {
			let index = unitNames.indexOf(ingredient);
			childNodes.push(new NodeItem(unitArray[index], ingredients[ingredient] * (this.modifier as any)));
		}
		
		return childNodes;
	}
	
	getDescendents(unitArray: (Unit|Recipe)[], magic?: Boolean) {
		let children = this.getChildNodes(unitArray);
		let newChildren: NodeItem[] = [];
		if (magic && !(this.getChildNodes(unitArray)[0].unit instanceof Recipe)) {
			return [this];
		}
		
		if (children) {
			for (var i = 0; i < children.length; i++) {
				let grandchildren = children[i].getDescendents(unitArray, magic);
				if (grandchildren.length) {
					newChildren = newChildren.concat(grandchildren);
				}
			}
			return newChildren;
		} else {
			return [this];
		}
	}
}

//create element is a function that creates a new element with the innertext listed, appends it to toAppend, and returns the new element
let createElement = function(elem: string, innerText: string, toAppend, cssClass?: string, id?: string) {
	let newElem = document.createElement(elem);
	if (cssClass) {
		newElem.className = cssClass;
	}
	if (id) {
		newElem.id = id;
	}
	let newText = document.createTextNode(innerText);
	newElem.appendChild(newText);
	toAppend.appendChild(newElem);
	return newElem;
}

let getPrettyStr = function(prop: String) {
	return prop.replace(/_/g, ' ');
}

let combineObjs = function(objArr: NodeItem[]) {
	let newObj:any = {};
	for (var i = 0; i < objArr.length; i++) {
		//get the name of the unit
		let name = objArr[i].unit.name;
		if (newObj[name]) {
			newObj[name] += objArr[i].modifier;
		} else {
			newObj[name] = objArr[i].modifier;
		}
	}
	
	return newObj;
}

//create an array of units/recipes based on what is in the unitData
let readData = function(unitData) {
	var units:(Unit|Recipe)[];
	units = [];
	
	for (var i = 0; i < unitData.length; i++) {
		let current = unitData[i];
		if (!current.type) {
			current.type = 'basic';
		}
		//check if this object has an 'ingredients' property
		if (current.ingredients) {
			units.push(new Recipe(current.name, current.race, current.ingredients, current.tier));
		} else {
			units.push(new Unit(current.name, current.race));
		}
	}
	return units;
}

let printObjToTable = function(obj: Object, toAppend) {
	let table = createElement('table', '', toAppend);
	for (var prop in obj) {
		let row = createElement('tr', '', table);
		let col2 = createElement('td', '' + Math.round(obj[prop] * 100)/100, row);
		let col1 = createElement('td', getPrettyStr(prop), row);
	}
}

let clickCallback = function() {
	let recipeType = (document.getElementById('recipeType') as HTMLSelectElement).value;
	
	let children = this.nextSibling.children;
	let targetElem = children[0];
	
	if (recipeType === 'Immediate') {
		targetElem = targetElem.nextSibling;
	} else if (recipeType === 'Magic') {
		targetElem = targetElem.nextSibling.nextSibling;
	}
	
	if (targetElem.style.display === 'block') {
		targetElem.style.display = '';
	} else {
		for (var i = 0; i < children.length; i++) {
			children[i].style.display = '';
		}
		targetElem.style.display = 'block';
	}
}

let sortData = function(oldArr:(Unit|Recipe)[]) {
	let newArr:(Unit|Recipe)[] = [];
	
	for (var i = 0; i < oldArr.length; i++) {
		if (oldArr[i] instanceof Recipe) {
			newArr.push(oldArr[i]);
		} else {
			newArr.unshift(oldArr[i]);
		}
	}
	
	return newArr;
}

let filterResults = function(elem) {
	(document.getElementById('hiddenCheck') as HTMLInputElement).checked = true;
	(document.getElementById('basicCheck') as HTMLInputElement).checked = true;
	
	let searchTerm = elem.value;
	if (!searchTerm) {
		searchTerm = '';
	}
	searchTerm = searchTerm.replace(/ /g,"_");
	
	let recipes = document.getElementsByClassName('recipe');
	
	for (var i = 0; i < recipes.length; i++) {
		if (recipes[i].id.indexOf(searchTerm) === -1) {
			(recipes[i] as HTMLElement).style.display = 'none';
		} else {
			(recipes[i] as HTMLElement).style.display = 'block';
		}
	}
}

let toggleUnits = function(elem, unitType) {
	
	let unitsToToggle = document.getElementsByClassName(unitType);
	let display;
	if (elem.checked) {
		display = '';
	} else {
		display = 'none'
	}
	for (var i = 0; i < unitsToToggle.length; i++) {
		(unitsToToggle[i] as HTMLElement).style.display = display;
	}
}

let f_main = function(unitData) {
	let units = readData(unitData);
	units = sortData(units);
    let main = document.getElementById('main');
    //for each unit in units, create a DOM object with its name as the title
    for (var i = 0; i < units.length; i++) {
        let name = getPrettyStr(units[i].name);
		
		let unitElem = createElement('div', '', main, 'unit', units[i].name);
		createElement('h4', name, unitElem, 'unit-title');
		if (units[i] instanceof Recipe) {
			//let btn = createElement('button', 'Recipe', unitElem);
			unitElem.className = 'recipe ' + (units[i] as Recipe).tier;
			if ((units[i] as Recipe).tier !== "hidden") {
				unitElem.className = unitElem.className + ' basic';
			}
			let showButton = createElement('button', 'Recipe', unitElem);
			showButton.addEventListener('click', clickCallback);
			//TODO: finish getting the recipe info
			let recipesContainer = createElement('div', '', unitElem, 'recipes-container');
			let basicContainer = createElement('div', '', recipesContainer, 'basic-units');
			let immediateContainer = createElement('div', '', recipesContainer, 'immediate-units');
			let magicContainer = createElement('div', '', recipesContainer, 'magic-units');
			let immediateRecipe = (units[i] as Recipe).getRecipeUnits('immediate', units);
			let basicRecipe = (units[i] as Recipe).getRecipeUnits('basic', units);
			let magicRecipe = (units[i] as Recipe).getRecipeUnits('magic', units);
			printObjToTable(immediateRecipe, immediateContainer);
			printObjToTable(basicRecipe, basicContainer);
			printObjToTable(magicRecipe, magicContainer);
		}
    }
}

window.onload = function() {
	f_main(unitData);
};