import { Target } from '@/data/enum/Target'
import { Ability } from '@/data/enum/Ability'
import { Cast } from '@/data/enum/Cast'
import { Do } from '@/data/enum/Do'

export default {
    id: 9391,
    npcs: [
        {
            // Chosen Blood Matron
            id: 131436,
            area: 0,
            abilities: [
                {
                    // Blood Harvest
                    id: 265016,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.CHARGE],
                    do: [Do.HEAL]
                },
                {
                    // Savage Cleave
                    id: 265019,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.STATIC, Ability.DEBUFF, Ability.DAMAGE.OVER_TIME],
                    do: [Do.DODGE],
                    important: true
                },
                {
                    // Warcry
                    id: 265081,
                    target: Target.ALLY,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.BUFF],
                    do: [Do.DISENRAGE]
                }
            ]
        },
        {
            // Fetid Maggot
            id: 130909,
            area: 0,
            abilities: [
                {
                    // Rotten Bile,
                    id: 265540,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.STATIC],
                    do: [Do.STUN, Do.DODGE],
                    important: true
                }
            ]
        },
        {
            // Fanatical Headhunter
            id: 133663,
            area: 0,
            abilities: [
                {
                    // Hooked Snare,
                    id: 265377,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.ROOT, Ability.DAMAGE.OVER_TIME],
                    do: [Do.FREE]
                },
                {
                    // Barbed Spear
                    id: 265376,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK],
                    do: [Do.HEAL, Do.STUN]
                }
            ]
        },
        {
            // Devout Blood Priest
            id: 131492,
            area: 0,
            abilities: [
                {
                    // Gift of G'huun
                    id: 265091,
                    target: Target.ALLY,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.BUFF],
                    do: [Do.INTERRUPT, Do.DISENRAGE],
                    important: true
                },
                {
                    // Dark Reconstitution
                    id: 265089,
                    target: Target.ALLY,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.HEAL.CHUNK],
                    do: [Do.INTERRUPT],
                    important: true
                }
            ]
        },
        {
            // Blood Tick
            id: 132051,
            area: 0,
            abilities: [
                {
                    // Serrated Fangs
                    id: 260455,
                    target: Target.NONE,
                    cast: Cast.ON_DEATH,
                    is: [Ability.DAMAGE.OVER_TIME],
                    do: [Do.DELAY_DEATH]
                }
            ]
        },
        {
            // Befouled Spirit
            id: 133685,
            area: 0,
            abilities: [
                {
                    // Dark Omen
                    id: 265568,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.CHANNEL, Ability.DAMAGE.OVER_TIME, Ability.AOE.CIRCLE],
                    do: [Do.HEAL, Do.RUN_AWAY]
                },
                {
                    // Harrowing Despair
                    id: 278755,
                    target: Target.ALL,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK],
                    do: [Do.INTERRUPT]
                }
            ]
        },
        {
            // Living Rot
            id: 133852,
            area: 1,
            abilities: [
                {
                    // Wave of Decay
                    id: 265668,
                    target: Target.RANDOM,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.AOE.SWIRL],
                    do: [Do.INTERRUPT, Do.DODGE],
                    important: false
                }
            ]
        },
        {
            // Diseased Lasher
            id: 133870,
            area: 1,
            abilities: [
                {
                    // Decaying Mind
                    id: 278961,
                    target: Target.RANDOM,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.STUN, Ability.ABSORB_HEAL],
                    do: [Do.INTERRUPT],
                    important: true
                }
            ]
        },
        {
            // Feral Bloodswarmer
            id: 133835,
            area: 1,
            abilities: [
                {
                    // Thirst For Blood
                    id: 266107,
                    target: Target.RANDOM,
                    cast: Cast.INSTANT,
                    is: [Ability.FIXATE],
                    do: [Do.STUN, Do.RUN_AWAY]
                },
                {
                    // Sonic Screech
                    id: 266106,
                    target: Target.NONE,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SILENCE],
                    do: [Do.INTERRUPT]
                }
            ]
        },
        {
            // Fallen Deathspeaker
            id: 134284,
            area: 2,
            abilities: [
                {
                    // Raise Dead,
                    id: 272183,
                    target: Target.NONE,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [Do.INTERRUPT]
                },
                {
                    // Wicked Frenzy
                    id: 266209,
                    target: Target.ALLY,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.BUFF],
                    do: [Do.STUN]
                },
                {
                    // Wicked Embrace
                    id: 266265,
                    target: Target.TANK,
                    cast: Cast.INSTANT,
                    is: [Ability.DAMAGE.OVER_TIME],
                    do: [Do.DISPEL]
                }
            ]
        },
        {
            // Reanimated Guardian
            id: 133836,
            area: 2,
            abilities: [
                {
                    // Bone Shield
                    id: 266201,
                    target: Target.SELF,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SHIELD],
                    do: [Do.INTERRUPT]
                }
            ]
        },
        {
            // Bloodsworn Defiler
            id: 133912,
            area: 2,
            abilities: [
                {
                    // Shadow Bolt Volley
                    id: 265487,
                    target: Target.ALL,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.DAMAGE.CHUNK],
                    do: [Do.INTERRUPT]
                },
                {
                    // Summon Spirit Drain Totem
                    id: 265523,
                    target: Target.NONE,
                    cast: Cast.INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [Do.INTERRUPT]
                }
            ]
        },
        {
            // Spirit Drain Totem
            id: 135169,
            area: 2,
            abilities: [
                {
                    // Spirit Drain
                    id: 265511,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.STUN],
                    do: [Do.RUN_AWAY]
                }
            ]
        },
        {
            // Faceless Corruptor
            id: 138281,
            area: 3,
            abilities: [
                {
                    // Abyssal Reach
                    id: 272592,
                    target: Target.NONE,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.SUMMON],
                    do: [Do.RUN_AWAY]
                },
                {
                    // Maddening Gaze
                    id: 272609,
                    target: Target.RANDOM,
                    cast: Cast.NON_INTERRUPTIBLE,
                    is: [Ability.FRONTAL.STATIC],
                    do: [Do.DODGE]
                }
            ]
        }
    ]
}