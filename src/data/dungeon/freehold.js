import { Target } from '@/data/enum/Target'
import { Ability } from '@/data/enum/Ability'
import { Cast } from '@/data/enum/Cast'
import { Do } from '@/data/enum/Do'

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
					target: Target.RANDOM,
					cast: Cast.NON_INTERRUPTIBLE,
					is: [Ability.FRONTAL.STATIC],
					do: [Do.DODGE],
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
					target: Target.MELEE,
					cast: Cast.INSTANT,
					is: [Ability.CLOSEST],
					do: [Do.RUN_AWAY],
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
					target: Target.ALLY,
					cast: Cast.INTERRUPTIBLE,
					is: [Ability.HEAL.OVER_TIME],
					do: [Do.INTERRUPT]
				},
				{
					// Infected Wound
					id: 258323,
					target: Target.TANK,
					cast: Cast.INSTANT,
					is: [Ability.REDUC_HEAL],
					do: [Do.DISPEL, Do.OUTHEAL]
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
					target: Target.RANDOM,
					cast: Cast.INTERRUPTIBLE,
					is: [Ability.AOE.SWIRL],
					do: [Do.INTERRUPT]
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
					target: Target.RANDOM,
					cast: Cast.NON_INTERRUPTIBLE,
					is: [Ability.DASH],
					do: [Do.DODGE]
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
					target: Target.RANDOM,
					cast: Cast.NON_INTERRUPTIBLE,
					is: [Ability.TRAP],
					do: [Do.DODGE]
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
					target: Target.RANDOM,
					cast: Cast.NON_INTERRUPTIBLE,
					is: [Ability.FIXATE],
					do: [Do.STUN],
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
					target: Target.RANDOM,
					cast: Cast.INTERRUPTIBLE,
					is: [Ability.SILENCE],
					do: [Do.INTERRUPT]
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
					target: Target.TANK,
					cast: Cast.NON_INTERRUPTIBLE,
					is: [Ability.DEBUFF],
					do: [Do.DO_NOT_JUMP]
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
					target: Target.NONE,
					cast: Cast.NON_INTERRUPTIBLE,
					is: [Ability.SPIN],
					do: [Do.DODGE]
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
					target: Target.RANDOM,
					cast: Cast.INTERRUPTIBLE,
					is: [Ability.FRONTAL.STATIC],
					do: [Do.INTERRUPT]
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
					target: Target.ALLY,
					cast: Cast.INTERRUPTIBLE,
					is: [Ability.BUFF],
					do: [Do.DO_NOT_INTERRUPT],
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
					target: Target.NONE,
					cast: Cast.NON_INTERRUPTIBLE,
					is: [Ability.SPIN],
					do: [Do.STUN]
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
					target: Target.SELF,
					cast: Cast.INTERRUPTIBLE,
					is: [Ability.AOE.CIRCLE],
					do: [Do.INTERRUPT]
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
					target: Target.TANK,
					cast: Cast.NON_INTERRUPTIBLE,
					is: [Ability.REDUC_HEAL],
					do: [Do.DEFENSIVE]
				}
			]
		}
	]
}