// magic -> rare -> epic -> unique -> hell -> legend
var unitData = [
	//terran bio
    {
        name: "marine"
    },
    {
        name: "marauder"
    },
    {
        name: "ghost" 
    },
    {
        name: "warmonger",
        ingredients: {
            marine: 2
        }
    },
    {
        name: "sniper",
        ingredients: {
            ghost: 2
        }
    },
    {
        name: "hammer_security",
        ingredients: {
            marauder: 1.5
        }
    },
    {
        name: "death_head",
        ingredients: {
            warmonger: 1,
            hammer_security: 1
        }
    },
    {
        name: "spectre",
        ingredients: {
            sniper: 1,
            hammer_security: 1
        }
    },
    {
        name: "jim_raynor",
        ingredients: {
            death_head: 1,
            spectre: 1
        }
    },
	//zerg
	{
		name: "hydralisk"
	},
	{
		name: "roach"
	},
	{
		name: "lurker"
	},
	{
		name: "primal_hydralisk",
		ingredients: {
			hydralisk: 1.5
		}
	},
	{
		name: "primal_roach",
		ingredients: {
			roach: 2
		}
	},
	{
		name: "primal_lurker",
		ingredients: {
			lurker: 2
		}
	},
	{
		name: "brutalisk",
		ingredients: {
			primal_lurker: 1,
			primal_hydralisk: 1
		}
	},
	{
		name: "ravasaur",
		ingredients: {
			primal_roach: 1,
			primal_hydralisk: 1
		}
	},
	{
		name: "kerrigan",
		ingredients: {
			brutalisk: 1,
			ravasaur: 1
		}
	},
	//protoss bio
	{
		name: "zealot",
	},
	{
		name: "high_templar"
	},
	{
		name: "archon"
	},
	{
		name: "dark_zealot",
		ingredients: {
			zealot: 2
		}
	},
	{
		name: "dark_high_templar",
		ingredients: {
			high_templar: 2
		}
	},
	{
		name: "dark_archon",
		ingredients: {
			archon: 1.5
		}
	},
	{
		name: "stone_zealot",
		ingredients: {
			dark_archon: 1,
			dark_zealot: 1
		}
	},
	{
		name: "purifier_adept",
		ingredients: {
			dark_archon: 1,
			dark_high_templar: 1
		}
	},
	{
		name: "zeratul",
		ingredients: {
			purifier_adept: 1,
			stone_zealot: 1
		}
	},
	//terran mech
	{
		name: "vulture"
	},
	{
		name: "goliath"
	},
	{
		name: "siege_tank"
	},
	{
		name: "diamondback",
		ingredients: {
			vulture: 2
		}
	},
	{
		name: "siege_breaker",
		ingredients: {
			siege_tank: 1.5
		}
	},
	{
		name: "spartan_company",
		ingredients: {
			goliath: 2
		}
	},
	{
		name: "blackhammer",
		ingredients: {
			siege_breaker: 1,
			spartan_company: 1
		}
	},
	{
		name: "ares",
		ingredients: {
			siege_breaker: 1,
			diamondback: 1
		}
	},
	{
		name: "arch_angel",
		ingredients: {
			ares: 1,
			blackhammer: 1
		}
	},
	//protoss mech
	{
		name: "sentry"
	},
	{
		name: "stalker"
	},
	{
		name: "immortal"
	},
	{
		name: "dark_sentry",
		ingredients: {
			sentry: 2
		}
	},
	{
		name: "dark_stalker",
		ingredients: {
			stalker: 2
		}
	},
	{
		name: "dark_immortal",
		ingredients: {
			immortal: 1.5
		}
	},
	{
		name: "instigator",
		ingredients: {
			dark_stalker: 1,
			dark_immortal: 1
		}
	},
	{
		name: "havoc",
		ingredients: {
			dark_sentry: 1,
			dark_immortal: 1
		}
	},
	{
		name: "collosus",
		ingredients: {
			instigator: 1,
			havoc: 1
		}
	},
	//unique
	{
		name: "alexi_stukov",
		ingredients: {
			jim_raynor: 1,
			kerrigan: 1
		}
	},
	{
		name: "hybrid_reaver",
		ingredients: {
			kerrigan: 1,
			zeratul: 1
		}
	},
	{
		name: "hybrid_dominator",
		ingredients: {
			zeratul: 1,
			jim_raynor: 1
		}
	},
	{
		name: "odin",
		ingredients: {
			arch_angel: 2
		}
	},
	{
		name: "wrathwalker",
		ingredients: {
			collosus: 2
		}
	},
	{
		name: "void_ray",
		ingredients: {
			collosus: 1,
			arch_angel: 1
		}
	},
	//hell
	{
		name: "nova",
		ingredients: {
			alexi_stukov: 2,
			hybrid_dominator: 1
		}
	},
	{
		name: "vorazun",
		ingredients: {
			hybrid_dominator: 2,
			hybrid_reaver: 1
		}
	},
	{
		name: "leviathan",
		ingredients: {
			hybrid_reaver: 2,
			alexi_stukov: 1
		}
	},
	{
		name: "void_seeker",
		ingredients: {
			wrathwalker: 2,
			void_ray: 1
		}
	},
	{
		name: "hyperion",
		ingredients: {
			odin: 2,
			void_ray: 1
		}
	},
	//hidden
	{
		name: "warfield",
		ingredients: {
			alexi_stukov: 1,
			spectre: 4
		}
	},
	{
		name: "kraith",
		ingredients: {
			hybrid_reaver: 1,
			brutalisk: 4
		}
	},
	{
		name: "tassadar",
		ingredients: {
			hybrid_dominator: 1,
			purifier_adept: 4
		}
	},
	{
		name: "science_vessel",
		ingredients: {
			odin: 1,
			ares: 4
		}
	},
	{
		name: "purifier_collosus",
		ingredients: {
			wrathwalker: 1,
			instigator: 4
		}
	},
	//legendary
	{
		name: "commando_raynor",
		ingredients: {
			nova: 1,
			warfield: 1
		}
	},
	{
		name: "k5_kerrigan",
		ingredients: {
			leviathan: 1,
			kraith: 1
		}
	},
	{
		name: "artanis",
		ingredients: {
			vorazun: 1,
			tassadar: 1
		}
	},
	{
		name: "selendis",
		ingredients: {
			purifier_collosus: 1,
			void_seeker: 1
		}
	},
	{
		name: "gorgon_cruiser",
		ingredients: {
			hyperion: 1,
			science_vessel: 1
		}
	},
	//hidden - Zerg
	{
		name: "swarm_host",
		type: "hidden",
		ingredients: {
			lurker: 2
		}
	},
	{
		name: "queen",
		type: "hidden",
		ingredients: {
			swarm_host: 2,
			ravasaur: 1
		}
	},
	{
		name: "brood_lord",
		type: "hidden",
		ingredients: {
			queen: 2,
			kraith: 1
		}
	},
	{
		name: "drone",
		type: "hidden",
		ingredients: {
			primal_roach: 1/3,
			primal_hydralisk: 2/3
		}
	},
	{
		name: "spore_cannon",
		type: "hidden",
		ingredients: {
			drone: 12
		}
	},
	{
		name: "vile_roach",
		type: "hidden",
		ingredients: {
			primal_roach: 3,
			dark_stalker: 2
		}
	},
	{
		name: "omegalisk",
		type: "hidden",
		ingredients: {
			hybrid_reaver: 2,
			kerrigan: 3
		}
	},
	{
		name: "torrasque",
		type: "hidden",
		ingredients: {
			omegalisk: 1,
			vile_roach: 2
		}
	},
	{
		name: "xelnaga_kerrigan",
		type: "hidden",
		ingredients: {
			k5_kerrigan: 1,
			torrasque: 1,
			raven: 2
		}
	},
	//hidden - Terran Bio
	{
		name: "tauren_space_marine",
		type: "hidden",
		ingredients: {
			warmonger: 2
		}
	},
	{
		name: "gabriel_tosh",
		type: "hidden",
		ingredients: {
			spectre: 2,
			hammer_security: 3
		}
	},
	{
		name: "dominion_marauder",
		type: "hidden",
		ingredients: {
			tauren_space_marine: 2,
			hammer_security: 3
		}
	},
	{
		name: "tauren_toilet",
		type: "hidden",
		ingredients: {
			tauren_space_marine: 2,
			annihilator: 1
		}
	},
	{
		name: "murloc_marine",
		type: "hidden",
		ingredients: {
			death_head: 3,
			ravasaur: 2
		}
	},
	{
		name: "stetmann",
		type: "hidden",
		ingredients: {
			murloc_marine: 1,
			tauren_toilet: 1
		}
	},
	{
		name: "swann",
		type: "hidden",
		ingredients: {
			dominion_marauder: 2
		}
	},
	{
		name: "tychus_findlay",
		type: "hidden",
		ingredients: {
			swann: 1,
			stetmann: 1
		}
	},
	//hidden - Terran Mech
	{
		name: "widow_mine",
		type: "hidden",
		ingredients: {
			vulture: 4
		}
	},
	{
		name: "warhound",
		type: "hidden",
		ingredients: {
			spartan_company: 2
		}
	},
	{
		name: "laser_drill",
		type: "hidden",
		ingredients: {
			siege_breaker: 3,
			ares: 2
		}
	},
	{
		name: "garbage",
		type: "hidden",
		ingredients: {
			dark_zealot: 2,
			diamondback: 3
		}
	},
	{
		name: "nuke_silo",
		type: "hidden",
		ingredients: {
			tauren_toilet: 1,
			garbage: 2,
			crimson_archon: 1
		}
	},
	{
		name: "arch_fighter",
		type: "hidden",
		ingredients: {
			arch_angel: 4
		}
	},
	{
		name: "pirate_capital_ship",
		type: "hidden",
		ingredients: {
			arch_fighter: 2,
			hyperion: 1
		}
	},
	{
		name: "raven",
		type: "hidden",
		ingredients: {
			widow_mine: 2,
			warhound: 3,
			garbage: 1
		}
	},
	{
		name: "hercules_bomber",
		type: "hidden",
		ingredients: {
			raven: 1,
			science_vessel: 1
		}
	},
	{
		name: "terra-tron",
		type: "hidden",
		ingredients: {
			gorgon_cruiser: 1,
			pirate_capital_ship: 1,
			swann: 2
		}
	},
	//hidden - Protoss Bio
	{
		name: "crimson_archon",
		type: "hidden",
		ingredients: {
			dark_archon: 4
		}
	},
	{
		name: "lasarra",
		type: "hidden",
		ingredients: {
			crimson_archon: 1,
			stone_zealot: 3
		}
	},
	{
		name: "dark_templar",
		type: "hidden",
		ingredients: {
			dark_high_templar: 1,
			dark_zealot: 1
		}
	},
	{
		name: "sentinel",
		type: "hidden",
		ingredients: {
			dark_templar: 2
		}
	},
	{
		name: "centurion",
		type: "hidden",
		ingredients: {
			dark_templar: 2
		}
	},
	{
		name: "blood_hunter",
		type: "hidden",
		ingredients: {
			centurion: 2,
			purifier_adept: 2
		}
	},
	{
		name: "ascendant",
		type: "hidden",
		ingredients: {
			sentinel: 2,
			stone_zealot: 2
		}
	},
	{
		name: "karax",
		type: "hidden",
		ingredients: {
			ascendant: 2,
			hybrid_dominator: 1
		}
	},
	{
		name: "alarak",
		type: "hidden",
		ingredients: {
			blood_hunter: 2,
			hybrid_dominator: 1
		}
	},
	{
		name: "talandar",
		type: "hidden",
		ingredients: {
			karax: 1,
			alarak: 1
		}
	},
	//hidden - Protoss Mech
	{
		name: "energizer",
		type: "hidden",
		ingredients: {
			dark_sentry: 2
		}
	},
	{
		name: "annihilator",
		type: "hidden",
		ingredients: {
			dark_immortal: 4
		}
	},
	{
		name: "warp_prism",
		type: "hidden",
		ingredients: {
			energizer: 1,
			annihilator: 1
		}
	},
	{
		name: "mothership_core",
		type: "hidden",
		ingredients: {
			warp_prism: 1,
			void_ray: 1
		}
	},
	{
		name: "tempest",
		type: "hidden",
		ingredients: {
			havoc: 2,
			dark_immortal: 3
		}
	},
	{
		name: "purifier_mothership",
		type: "hidden",
		ingredients: {
			wrathwalker: 2,
			mothership_core: 1
		}
	},
	{
		name: "taldarim_tempest",
		type: "hidden",
		ingredients: {
			tempest: 2,
			crimson_archon: 2
		}
	},
	{
		name: "taldarim_mothership",
		type: "hidden",
		ingredients: {
			purifier_mothership: 1,
			taldarim_tempest: 1
		}
	},
	{
		name: "mohandar",
		type: "hidden",
		ingredients: {
			purifier_collosus: 1,
			void_ray: 4
		}
	},
	{
		name: "spear_of_adun",
		type: "hidden",
		ingredients: {
			selendis: 1,
			taldarim_mothership: 1,
			karax: 2
		}
	},
	//hidden - Hybrid
	{
		name: "hybrid_nemesis",
		type: "hidden",
		ingredients: {
			brood_lord: 1,
			tassadar: 2
		}
	},
	{
		name: "sarah_kerrigan",
		type: "hidden",
		ingredients: {
			nova: 1,
			k5_kerrigan: 1
		}
	},
	{
		name: "hybrid_behemoth",
		type: "hidden",
		ingredients: {
			alarak: 1,
			warfield: 2
		}
	},
	{
		name: "hybrid_destroyer",
		type: "hidden",
		ingredients: {
			hercules_bomber: 1,
			mohandar: 1
		}
	}
];