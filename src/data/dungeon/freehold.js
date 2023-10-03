import { TARGET } from '../enum/Target'
import { ABILITY } from '../enum/Ability'
import { CAST } from '../enum/Cast'
import { DO } from '../enum/Do'

export default {
	id: 9164,
	npcs: [
		{
			// Irontide Enforcer
			id: 129602,
			area: 0,
			abilities: [
				{
					// Brutal Backhand
					id: 257426,
					target: TARGET.RANDOM,
					cast: CAST.NON_INTERRUPTIBLE,
					is: [ABILITY.FRONTAL.STATIC],
					do: [DO.DODGE],
					important: true
				}
			]
		},
		{
			// Irontide Mastiff
			id: 128551,
			surname: "Dog",
			area: 0,
			abilities: [
				{
					// Crippling Bite
					id: 384575,
					target: TARGET.MELEE,
					cast: CAST.INSTANT,
					is: [ABILITY.CLOSEST],
					do: [DO.RUN_AWAY],
				}
			]
		},
		{
			// Irontide Bonesaw
			id: 129788,
			area: 0,
			abilities: [
				{
					// Healing Balm
					id: 257397,
					target: TARGET.ALLY,
					cast: CAST.INTERRUPTIBLE,
					is: [ABILITY.HEAL.OVER_TIME],
					do: [DO.INTERRUPT]
				},
				{
					// Infected Wound
					id: 258323,
					target: TARGET.TANK,
					cast: CAST.INSTANT,
					is: [ABILITY.DEBUFF.REDUC_HEAL],
					do: [DO.DISPEL, DO.OUTHEAL]
				}
			]
		},
		{
			// Irontide Oarsman
			id: 127111,
			area: 1,
			abilities: [
				{
					// Sea Spout
					id: 258777,
					target: TARGET.RANDOM,
					cast: CAST.INTERRUPTIBLE,
					is: [ABILITY.AOE.SWIRL],
					do: [DO.INTERRUPT]
				}
			]
		},
		{
			// Cutwater Duelist
			id: 129559,
			area: 1,
			abilities: [
				{
					// Duelist Dash
					id: 274400,
					target: TARGET.RANDOM,
					cast: CAST.NON_INTERRUPTIBLE,
					is: [ABILITY.DASH],
					do: [DO.DODGE]
				}
			]
		},
		{
			// Vermin Trapper
			id: 130404,
			area: 1,
			abilities: [
				{
					// Rat Traps
					id: 274383,
					target: TARGET.RANDOM,
					cast: CAST.NON_INTERRUPTIBLE,
					is: [ABILITY.TRAP],
					do: [DO.DODGE]
				}
			]
		},
		{
			// Blacktooth Scrapper
			id: 129529,
			area: 1,
			abilities: [
				{
					// Blind Rage
					id: 257739,
					target: TARGET.RANDOM,
					cast: CAST.NON_INTERRUPTIBLE,
					is: [ABILITY.FIXATE],
					do: [DO.STUN],
					important: true
				}
			]
		},
		{
			// Blacktooth Knuckleduster
			id: 129547,
			area: 1,
			abilities: [
				{
					// Shattering Bellow
					id: 257732,
					target: TARGET.RANDOM,
					cast: CAST.INTERRUPTIBLE,
					is: [ABILITY.SILENCE],
					do: [DO.INTERRUPT]
				}
			]
		},
		{
			// Bilge Rat Swabby
			id: 129526,
			area: 1,
			abilities: [
				{
					// Slippery Suds
					id: 274507,
					target: TARGET.TANK,
					cast: CAST.NON_INTERRUPTIBLE,
					is: [ABILITY.DEBUFF.DEBUFF],
					do: [DO.DO_NOT_JUMP]
				}
			]
		},
		{
			// Bilge Rat Buccaneer
			id: 129527,
			area: 1,
			abilities: [
				{
					// Goin' Bananas
					id: 257756,
					target: TARGET.NONE,
					cast: CAST.NON_INTERRUPTIBLE,
					is: [ABILITY.SPIN],
					do: [DO.DODGE]
				}
			]
		},
		{
			// Bilge Rat Brinescale
			id: 129600,
			area: 1,
			abilities: [
				{
					// Frost Blast
					id: 257784,
					target: TARGET.RANDOM,
					cast: CAST.INTERRUPTIBLE,
					is: [ABILITY.FRONTAL.STATIC],
					do: [DO.INTERRUPT]
				}
			]
		},
		{
			// Irontide Ravager
			id: 130012,
			area: 2,
			abilities: [
				{
					// Painful Motivation
					id: 257899,
					target: TARGET.ALLY,
					cast: CAST.INTERRUPTIBLE,
					is: [ABILITY.BUFF.BUFF],
					do: [DO.DO_NOT_INTERRUPT],
					important: true
				}
			]
		},
		{
			// Irontide Buccaneer
			id: 130011,
			area: 2,
			abilities: [
				{
					// Blade Barrage
					id: 257870,
					target: TARGET.NONE,
					cast: CAST.NON_INTERRUPTIBLE,
					is: [ABILITY.SPIN],
					do: [DO.STUN]
				}
			]
		},
		{
			// Irontide Stormcaller
			id: 126919,
			area: 2,
			abilities: [
				{
					// Thundering Squall
					id: 257736,
					target: TARGET.SELF,
					cast: CAST.INTERRUPTIBLE,
					is: [ABILITY.AOE.CIRCLE],
					do: [DO.INTERRUPT]
				}
			]
		},
		{
			// Irontide Officer
			id: 127106,
			area: 2,
			abilities: [
				{
					// Oiled Blade
					id: 257908,
					target: TARGET.TANK,
					cast: CAST.NON_INTERRUPTIBLE,
					is: [ABILITY.DEBUFF.REDUC_HEAL],
					do: [DO.DEFENSIVE]
				}
			]
		}
	]
}