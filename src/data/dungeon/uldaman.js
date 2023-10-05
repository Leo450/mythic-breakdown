import { Target } from '@/data/enum/Target'
import { Ability } from '@/data/enum/Ability'
import { Cast } from '@/data/enum/Cast'
import { Do } from '@/data/enum/Do'

export default {
    id: 13968,
    npcs: [
        {
            // Stonevault Geomancer
            id: 184022,
            area: 0,
            abilities: [
                {
                    // Chain Lightning
                    id: 369675,
                    target: Target.RANDOM,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DAMAGE.GROUP],
                    do: [Do.INTERRUPT],
                    important: true
                },
                {
                    // Stone Spike
                    id: 369674,
                    target: Target.TANK,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Hulking Berserker
            id: 184020,
            area: 0,
            abilities: [
                {
                    // Brutal Slam
                    id: 369811,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL, Ability.STUN],
                    do: [Do.DODGE],
                },
                {
                    // Diseased Bite
                    id: 369818,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SLOW],
                    do: [Do.DISPEL],
                }
            ]
        },
        {
            // Vicious Basilisk
            id: 184023,
            area: 0,
            abilities: [
                {
                    // Chomp
                    id: 369828,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.OVER_TIME],
                    do: [Do.DISPEL, Do.DEFENSIVE],
                    important: true
                },
                {
                    // Spiked Carapace
                    id: 369823,
                    target: Target.SELF,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SHIELD],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Burly Rock-Thrower
            id: 184019,
            area: 1,
            abilities: [
                {
                    // Throw Rock
                    id: 369853,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL],
                    do: [Do.DODGE, Do.STUN],
                }
            ]
        },
        {
            // Earthen Custodian
            id: 184130,
            area: 2,
            abilities: [
                {
                    // Cleave
                    id: 369409,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.MOVING],
                    do: [Do.DODGE],
                    important: true
                }
            ]
        },
        {
            // Refti Custodian
            id: 184319,
            area: 2,
            abilities: [
                {
                    // Jagged Bite
                    id: 377732,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.OVER_TIME],
                    do: [Do.DISPEL, Do.DEFENSIVE],
                    important: true
                },
                {
                    // Ancient Power
                    id: 377738,
                    target: Target.SELF,
                    cast: Cast.INSTANT,
                    is: [Ability.BUFF],
                    do: [Do.DISPEL],
                }
            ]
        },
        {
            // Earthen Weaver
            id: 186420,
            area: 2,
            abilities: [
                {
                    // Hail of Stone
                    id: 369465,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.GROUP],
                    do: [Do.STUN],
                    important: true
                },
                {
                    // Stone Bolt
                    id: 369399,
                    target: Target.TANK,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Earthen Warder
            id: 184132,
            area: 3,
            abilities: [
                {
                    // Earthen Ward
                    id: 375276,
                    target: Target.ALLY,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SHIELD],
                    do: [Do.INTERRUPT],
                },
                {
                    // Curse of Stone
                    id: 369365,
                    target: Target.RANDOM,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.STUN],
                    do: [Do.INTERRUPT, Do.DISPEL],
                    important: true
                },
                {
                    // Stone Eruption
                    id: 369368,
                    target: Target.RANDOM,
                    cast: Cast.INSTANT,
                    is: [Ability.AOE.SWIRL],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Runic Protector
            id: 184107,
            area: 3,
            abilities: [
                {
                    // Fissuring Slam
                    id: 369335,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.POOL],
                    do: [Do.DODGE],
                },
                {
                    // Earthquake
                    id: 369328,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.CHANNEL, Ability.DAMAGE.GROUP],
                    do: [Do.HEAL],
                }
            ]
        },
        {
            // Cavern Seeker
            id: 184301,
            area: 3,
            abilities: [
                {
                    // Sonic Burst
                    id: 369411,
                    target: Target.NONE,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SILENCE],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Skittering Crawler
            id: 184303,
            area: 3,
            abilities: [
                {
                    // Venomous Fangs
                    id: 369417,
                    target: Target.TANK,
                    cast: Cast.INSTANT,
                    is: [Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.DISPEL, Do.DEFENSIVE],
                }
            ]
        },
        {
            // Ebonstone Golem
            id: 184300,
            area: 4,
            abilities: [
                {
                    // Thunderous Clap
                    id: 381593,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.GROUP],
                    do: [Do.HEAL, Do.DEFENSIVE],
                }
            ]
        },
        {
            // Earthen Guardian
            id: 184131,
            area: 4,
            abilities: [
                {
                    // Bulwark Slam
                    id: 382696,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.TANKBUSTER],
                    do: [Do.DEFENSIVE],
                },
                {
                    // Blessing of Tyr
                    id: 382578,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.CIRCLE, Ability.BUFF],
                    do: [Do.RUN_AWAY, Do.STUN],
                }
            ]
        },
        {
            // Infinite Agent
            id: 184335,
            area: 5,
            abilities: [
                {
                    // Time Blade
                    id: 377486,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.TANKBUSTER, Ability.SLOW],
                    do: [Do.DEFENSIVE]
                },
                {
                    // Hasten
                    id: 377500,
                    target: Target.ALLY,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.BUFF],
                    do: [Do.INTERRUPT],
                    important: true                }
            ]
        },
        {
            // Infinite Timereaver
            id: 184331,
            area: 5,
            abilities: [
                {
                    // Stolen Time
                    id: 377510,
                    target: Target.ALL,
                    cast: Cast.INSTANT,
                    is: [Ability.DAMAGE.GROUP, Ability.DEBUFF],
                    do: [Do.LOS, Do.STUN, Do.FOCUS],
                    important: true
                }
            ]
        }
    ]
}