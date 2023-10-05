import { Target } from '@/data/enum/Target'
import { Ability } from '@/data/enum/Ability'
import { Cast } from '@/data/enum/Cast'
import { Do } from '@/data/enum/Do'

export default {
    id: 14082,
    npcs: [
        {
            // Refti Defender
            id: 190340,
            area: 0,
            abilities: [
                {
                    // Spear Flurry
                    id: 393432,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.STATIC, Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.DODGE, Do.DISPEL]
                },
                {
                    // Demoralizing Shout
                    id: 374339,
                    target: Target.ALL,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DEBUFF],
                    do: [Do.INTERRUPT],
                    important: true
                }
            ]
        },
        {
            // Primalist Geomancer
            id: 190345,
            area: 0,
            abilities: [
                {
                    // Seismic Slam
                    id: 374073,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DASH, Ability.AOE.SWIRL],
                    do: [Do.DODGE, Do.SPREAD]
                }
            ]
        },
        {
            // Containment Apparatus
            id: 190342,
            area: 0,
            abilities: [
                {
                    // Containment Beam
                    id: 374020,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.CHANNEL, Ability.ROOT, Ability.DAMAGE.OVER_TIME],
                    do: [Do.STUN, Do.HEAL]
                },
                {
                    // Expulse
                    id: 374045,
                    target: Target.NONE,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DAMAGE.GROUP],
                    do: [Do.INTERRUPT],
                    important: true
                }
            ]
        },
        {
            // Dazzling Dragonfly
            id: 190362,
            area: 1,
            abilities: [
                {
                    // Dazzle
                    id: 374563,
                    target: Target.TANK,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.FRONTAL.MOVING, Ability.STUN],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Curious Swoglet
            id: 190366,
            area: 1,
            abilities: [
                {
                    // Gulp Swog Toxin
                    id: 374389,
                    target: Target.ALL,
                    cast: Cast.INSTANT,
                    is: [Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.RUN_AWAY, Do.STUN, Do.DISPEL],
                    important: true
                }
            ]
        },
        {
            // Primalist Shocktrooper
            id: 199037,
            area: 1,
            abilities: [
                {
                    // Elemental Focus
                    id: 395694,
                    target: Target.NONE,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.BUFF],
                    do: [Do.INTERRUPT],
                    important: true
                }
            ]
        },
        {
            // Skulking Zealot
            id: 190359,
            area: 1,
            abilities: [
                {
                    // Cheap Shot
                    id: 374615,
                    target: Target.TANK,
                    cast: Cast.INSTANT,
                    is: [Ability.STUN],
                    do: [],
                }
            ]
        },
        {
            // Flamecaller Aymi
            id: 190368,
            area: 1,
            abilities: [
                {
                    // Pyretic Burst
                    id: 374706,
                    target: Target.TANK,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DAMAGE.OVER_TIME],
                    do: [Do.INTERRUPT],
                },
                {
                    // Molten Subduction
                    id: 374724,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL],
                    do: [Do.DODGE],
                },
                {
                    // Cauterize
                    id: 374699,
                    target: Target.SELF,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.HEAL.CHUNK],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Squallbringer Cyraz
            id: 190370,
            area: 1,
            abilities: [
                {
                    // Whirling Fury
                    id: 375079,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SPIN],
                    do: [Do.DODGE],
                },
                {
                    // Gale Force Charge
                    id: 374863,
                    target: Target.RANDOM,
                    cast: Cast.INSTANT,
                    is: [Ability.CHARGE],
                    do: [],
                },
                {
                    // Zephyr's Call
                    id: 374823,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [],
                }
            ]
        },
        {
            // Gusting Proto-Dragon
            id: 190401,
            area: 2,
            abilities: [
                {
                    // Binding Winds
                    id: 391610,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.STUN],
                    do: [Do.DISPEL],
                    important: true
                },
                {
                    // Gusting Breath
                    id: 375348,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.MOVING],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Subterranean Proto-Dragon
            id: 190404,
            area: 2,
            abilities: [
                {
                    // Creeping Mold
                    id: 391613,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.DISPEL],
                    important: true
                },
                {
                    // Tectonic Breath
                    id: 375327,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.MOVING],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Glacial Proto-Dragon
            id: 190403,
            area: 2,
            abilities: [
                {
                    // Deep Chill
                    id: 391610,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SLOW],
                    do: [],
                    important: true
                },
                {
                    // Oceanic Breath
                    id: 375351,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.MOVING],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Primalist Galesinger
            id: 190373,
            area: 2,
            abilities: [
                {
                    // Primal Affinity
                    id: 376187,
                    target: Target.ALLY,
                    cast: Cast.INSTANT,
                    is: [Ability.BUFF],
                    do: [Do.FOCUS],
                    important: true
                },
                {
                    // Thunderstorm
                    id: 385141,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.POOL],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Primalist Earthshaker
            id: 190371,
            area: 2,
            abilities: [
                {
                    // Primal Affinity
                    id: 376187,
                    target: Target.ALLY,
                    cast: Cast.INSTANT,
                    is: [Ability.BUFF],
                    do: [Do.FOCUS],
                    important: true
                },
                {
                    // Rumbling Earth
                    id: 375384,
                    target: Target.SELF,
                    cast: Cast.INSTANT,
                    is: [Ability.AOE.CIRCLE],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Primalist Icecaller
            id: 190377,
            area: 2,
            abilities: [
                {
                    // Primal Affinity
                    id: 376187,
                    target: Target.ALLY,
                    cast: Cast.INSTANT,
                    is: [Ability.BUFF],
                    do: [Do.FOCUS],
                    important: true
                },
                {
                    // Refreshing Tides
                    id: 376171,
                    target: Target.ALLY,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.HEAL],
                    do: [Do.STUN],
                }
            ]
        },
        {
            // Aqua Rager
            id: 190407,
            area: 3,
            abilities: [
                {
                    // Boiling Rage
                    id: 377384,
                    target: Target.SELF,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.BUFF],
                    do: [Do.INTERRUPT],
                },
                {
                    // Tidal Divergence
                    id: 377341,
                    target: Target.SELF,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Infuser Sariya
            id: 190405,
            area: 3,
            abilities: [
                {
                    // Aqueous Barrier
                    id: 377402,
                    target: Target.SELF,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SHIELD],
                    do: [Do.INTERRUPT],
                    important: true
                },
                {
                    // Flash Flood
                    id: 390290,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL, Ability.KNOCKBACK],
                    do: [Do.DODGE],
                    important: true
                },
                {
                    // Inundate
                    id: 388882,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.GROUP],
                    do: [Do.HEAL],
                }
            ]
        }
    ]
}