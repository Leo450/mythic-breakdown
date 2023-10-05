import { createRouter, createWebHistory } from 'vue-router'
import DungeonView from '@/views/DungeonView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { DungeonSlug } from '@/data/enum/Dungeon'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:dungeon',
            name: 'dungeon',
            component: DungeonView,
            props: true,
            beforeEnter: async (to) => {
                if (!DungeonSlug.includes(to.params.dungeon)) return { name: 'not-found' }
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }
    ]
})

export default router
