import { Target } from '@/data/enum/Target'
import { Ability } from '@/data/enum/Ability'
import { Cast } from '@/data/enum/Cast'
import { Do } from '@/data/enum/Do'

export default {
    id: 14011,
    npcs: [
        {
            // Qalashi Warden
            id: 193293,
            area: 0,
            abilities: [
                {
                    // Blazing Slash
                    id: 384597,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.TANKBUSTER],
                    do: [Do.DEFENSIVE],
                    important: true
                },
                {
                    // Volcanic Guard
                    id: 382708,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.STATIC],
                    do: [Do.DODGE]
                }
            ]
        },
        {
            // Qalashi Spinecrusher
            id: 192787,
            area: 0,
            abilities: [
                {
                    // Brutal Strike
                    id: 378847,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK, Ability.KNOCKBACK],
                    do: []
                }
            ]
        },
        {
            // Qalashi Thaumaturge
            id: 192788,
            area: 0,
            abilities: [
                {
                    // Magma Conflagration
                    id: 378818,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.CHANNEL, Ability.DAMAGE.OVER_TIME],
                    do: [Do.HEAL],
                },
                {
                    // Molten Core
                    id: 378282,
                    target: Target.ALLY,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.BUFF, Ability.DAMAGE.GROUP],
                    do: [Do.INTERRUPT],
                    important: true
                }
            ]
        },
        {
            // Qalashi Plunderer
            id: 192786,
            area: 0,
            abilities: [
                {
                    // Explosive Concoction
                    id: 378827,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK, Ability.AOE.SWIRL],
                    do: [Do.SPREAD],
                }
            ]
        },
        {
            // Qalashi Hunter
            id: 189227,
            area: 1,
            abilities: [
                {
                    // Bold Ambush
                    id: 372566,
                    target: Target.RANDOM,
                    cast: Cast.INSTANT,
                    is: [Ability.DAMAGE.CHUNK, Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.DODGE, Do.DISPEL],
                },
                {
                    // Binding Spear
                    id: 372561,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL, Ability.DAMAGE.CHUNK, Ability.STUN],
                    do: [Do.DODGE, Do.FREE],
                }
            ]
        },
        {
            // Qalashi Trainee
            id: 189266,
            area: 1,
            abilities: [
                {
                    // Magma Fist
                    id: 372311,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.STATIC, Ability.DAMAGE.OVER_TIME],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Overseer Lahar
            id: 189235,
            area: 1,
            abilities: [
                {
                    // Eruptive Crush
                    id: 376186,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL, Ability.DAMAGE.CHUNK],
                    do: [Do.DODGE],
                },
                {
                    // Burning Roar
                    id: 395427,
                    target: Target.NONE,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.AOE.CIRCLE, Ability.DAMAGE.CHUNK, Ability.KNOCKBACK, Ability.SILENCE],
                    do: [Do.DODGE, Do.INTERRUPT],
                },
                {
                    // Imbued Magma
                    id: 372461,
                    target: Target.TANK,
                    cast: Cast.INSTANT,
                    is: [Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.DISPEL, Do.HEAL],
                }
            ]
        },
        {
            // Qalashi Bonetender
            id: 189265,
            area: 2,
            abilities: [
                {
                    // Mending Clay
                    id: 372223,
                    target: Target.ALLY,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.HEAL.OVER_TIME],
                    do: [Do.INTERRUPT],
                }
            ]
        },
        {
            // Qalashi Lavabearer
            id: 189472,
            area: 2,
            abilities: [
                {
                    // Throw Lava
                    id: 394971,
                    target: Target.RANDOM,
                    cast: Cast.INSTANT,
                    is: [Ability.DAMAGE.CHUNK, Ability.AOE.SWIRL, Ability.AOE.POOL],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Qalashi Irontorch
            id: 189464,
            area: 2,
            abilities: [
                {
                    // Scorching Breath
                    id: 372201,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.STATIC],
                    do: [Do.DODGE],
                },
                {
                    // Mote of Combustion
                    id: 384161,
                    target: Target.TANK,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.INTERRUPT, Do.DISPEL],
                }
            ]
        },
        {
            // Qalashi Bonesplitter
            id: 189467,
            area: 2,
            abilities: [
                {
                    // Dragonbone Axe
                    id: 372224,
                    target: Target.RANDOM,
                    cast: Cast.INSTANT,
                    is: [Ability.DAMAGE.CHUNK, Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.DISPEL],
                },
                {
                    // Pierce Marrow
                    id: 372262,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.CHARGE],
                    do: [],
                }
            ]
        },
        {
            // Irontorch Commander
            id: 189466,
            area: 2,
            abilities: [
                {
                    // Scorching Fusillade
                    id: 372543,
                    target: Target.ALL,
                    cast: Cast.INSTANT,
                    is: [Ability.DAMAGE.CHUNK, Ability.AOE.CIRCLE],
                    do: [Do.SPREAD],
                },
                {
                    // Conflagrant Battery
                    id: 372296,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL, Ability.DAMAGE.CHUNK],
                    do: [Do.DODGE],
                }
            ]
        },
        {
            // Qalashi Blacksmith
            id: 189471,
            area: 2,
            abilities: [
                {
                    // Forgestomp
                    id: 384623,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.GROUP],
                    do: [Do.HEAL],
                },
                {
                    // Reverberating Slam
                    id: 372971,
                    target: Target.TANK,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.TANKBUSTER],
                    do: [Do.DEFENSIVE],
                }
            ]
        },
        {
            // Forgewrought Monstrosity,
            id: 194816,
            area: 2,
            abilities: [
                {
                    // Forgewrought Fury
                    id: 384663,
                    target: Target.ALL,
                    cast: Cast.INSTANT,
                    is: [Ability.DAMAGE.GROUP],
                    do: [Do.HEAL],
                }
            ]
        },
        {
            // Apex Blazewing
            id: 193291,
            area: 3,
            abilities: [
                {
                    // Candescent Tempest
                    id: 381663,
                    target: Target.ALL,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.GROUP, Ability.KNOCKBACK],
                    do: [Do.HEAL],
                }
            ]
        },
        {
            // Qalashi Lavamancer
            id: 193944,
            area: 3,
            abilities: [
                {
                    // Molten Barrier
                    id: 382791,
                    target: Target.SELF,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SHIELD, Ability.DAMAGE.GROUP],
                    do: [Do.HEAL],
                },
                {
                    // Molten Army
                    id: 383651,
                    target: Target.NONE,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [Do.INTERRUPT],
                }
            ]
        }
    ]
}