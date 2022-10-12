import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import ListPage from './pages/ListPage'
import ShowPage from './pages/ShowPage'
import InfoPage from './pages/InfoPage'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/blogs',
        component: ListPage
    },
    {
        path: '/blogs/create',
        component: CreatePage
    },
    {
        path: '/info',
        component: InfoPage
    },
    {
        path: '/blogs/:id',
        component: ShowPage
    },
    {
        path: '/blogs/edit/:id',
        component: EditPage
    },
]

export default routes