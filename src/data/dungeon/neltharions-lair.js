import { Target } from '@/data/enum/Target'
import { Ability } from '@/data/enum/Ability'
import { Cast } from '@/data/enum/Cast'
import { Do } from '@/data/enum/Do'

export default {
    id: 7546,
    npcs: [
        {
            // Vileshard Crawler
            id: 96247,
            area: 0,
            abilities: [
                {
                    // Acid Splatter
                    id: 183401,
                    target: Target.NONE,
                    cast: Cast.ON_DEATH,
                    is: [Ability.AOE.POOL],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Embershard Scorpion
            id: 98406,
            area: 0,
            abilities: [
                {
                    // Impaling Shard
                    id: 193941,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.OVER_TIME],
                    do: [],
                }
            ]
        },
        {
            // Tarspitter Lurker
            id: 91001,
            area: 0,
            abilities: [
                {
                    // Viscid Bile
                    id: 183465,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DASH, Ability.FRONTAL.STATIC, Ability.AGGRO_RESET],
                    do: [Do.DODGE],
                    important: true
                }
            ]
        },
        {
            // Vileshard Hulk
            id: 91000,
            area: 0,
            abilities: [
                {
                    // Fracture
                    id: 193505,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.MOVING, Ability.KNOCKBACK],
                    do: [Do.DODGE],
                },
                {
                    // Piercing Shards
                    id: 226296,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.MOVING, Ability.TANKBUSTER],
                    do: [Do.DODGE, Do.DEFENSIVE],
                }
            ]
        },
        {
            // Vileshard Chunk
            id: 101438,
            area: 0,
            abilities: [
                {
                    // Crush
                    id: 226287,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Rockbound Pelter
            id: 91008,
            area: 1,
            abilities: [
                {
                    // Jagged Disc
                    id: 183633,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK],
                    do: [Do.STUN, Do.FOCUS, Do.DEFENSIVE],
                    important: true
                },
                {
                    // Retreat
                    id: 226361,
                    target: Target.SELF,
                    cast: Cast.INSTANT,
                    is: [Ability.DISENGAGE],
                    do: []
                }
            ]
        },
        {
            // Mightstone Breaker
            id: 90997,
            area: 1,
            abilities: [
                {
                    // Avalanche
                    id: 183088,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL],
                    do: [Do.DODGE],
                },
                {
                    // Avalanche
                    id: 183088,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.CIRCLE],
                    do: [Do.DODGE],
                    important: true
                }
            ]
        },
        {
            // Stoneclaw Hunter
            id: 91332,
            area: 1,
            abilities: [
                {
                    // Stone Shatter
                    id: 226347,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.INVISIBLE],
                    do: [Do.DODGE],
                },
                {
                    // Kill Command
                    id: 202198,
                    target: Target.ALLY,
                    cast: Cast.INSTANT,
                    is: [Ability.BUFF],
                    do: [],
                }
            ]
        },
        {
            // Rockback Gnasher
            id: 91006,
            area: 1,
            abilities: [
                {
                    // Stone Gaze
                    id: 202181,
                    target: Target.RANDOM,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.STUN],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Understone Drummer
            id: 92610,
            area: 1,
            abilities: [
                {
                    // War Drums,
                    id: 183526,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [Do.STUN],
                    important: true
                }
            ]
        },
        {
            // Blightshard Shaper
            id: 90998,
            area: 1,
            abilities: [
                {
                    // Petrifying Totem
                    id: 202108,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [Do.STUN],
                },
                {
                    // Stone Bolt
                    id: 186269,
                    target: Target.TANK,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Burning Geode
            id: 101437,
            area: 1,
            abilities: [
                {
                    // Scorch
                    id: 202075,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Stoneclaw Grubmaster
            id: 102404,
            area: 2,
            abilities: [
                {
                    // Worm Call
                    id: 183548,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [Do.FOCUS],
                    important: true
                },
                {
                    // Stone Shatter
                    id: 226347,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.INVISIBLE],
                    do: [Do.DODGE],
                },
            ]
        },
        {
            // Understone Demolisher
            id: 102253,
            area: 3,
            abilities: [
                {
                    // Charskin
                    id: 188587,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.BUFF],
                    do: []
                },
                {
                    // Burning Hatred
                    id: 200154,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FIXATE],
                    do: [Do.STUN, Do.RUN_AWAY],
                }
            ]
        },
        {
            // Emberhusk Dominator
            id: 102287,
            area: 3,
            abilities: [
                {
                    // Ember Swipe
                    id: 226406,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.MOVING],
                    do: [Do.DODGE],
                },
                {
                    // Frenzy
                    id: 201983,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.BUFF],
                    do: [Do.DEFENSIVE],
                },
                {
                    // Crystal Spike
                    id: 201953,
                    target: Target.ALL,
                    cast: Cast.INSTANT,
                    is: [Ability.DAMAGE.GROUP],
                    do: [Do.HEAL],
                }
            ]
        },
        {
            // Rockbound Trapper
            id: 102232,
            area: 3,
            abilities: [
                {
                    // Bound
                    id: 193585,
                    target: Target.TANK,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.STUN],
                    do: [Do.INTERRUPT],
                },
                {
                    // Jagged Disc
                    id: 183633,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK],
                    do: [Do.STUN, Do.DEFENSIVE]
                }
            ]
        }
    ]
}