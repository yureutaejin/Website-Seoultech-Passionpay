import {
    Link
} from 'react-router-dom'
import NavButton from './NavButton'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Home</Link>
                <ul className="navbar-nav">
                    <NavButton name='로그인' to='/login'/>
                    <NavButton name='공지사항' to='notification'/>
                    <NavButton name='프로젝트' to='/project'/>
                    <NavButton name='활동기록' to='/history'/>
                    <NavButton name='정보공유' to='/blogs'/>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar