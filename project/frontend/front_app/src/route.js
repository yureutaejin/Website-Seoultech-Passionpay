import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import ListPage from './pages/ListPage'
import ShowPage from './pages/ShowPage'
import ProjectPage from './pages/ProjectPage'
import NotiPage from './pages/NotiPage'
import HistoryPage from './pages/HistoryPage'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/notification',
        component: NotiPage
    },
    {
        path: '/project',
        component: ProjectPage
    },
    {
        path: '/history',
        component: HistoryPage
    },
    {
        path: '/blogs',
        component: ListPage
    },
    // {
    //     path: '/blogs/create',
    //     component: CreatePage
    // },
    
    {
        path: '/:type/create',
        component: CreatePage
    },
    {
        path: '/:type/:id',
        component: ShowPage
    },
    {
        path: '/blogs/edit/:id',
        component: EditPage
    },
]

export default routes