import logo from 'admin-lte/dist/img/AdminLTELogo.png'
import userProfile from 'admin-lte/dist/img/avatar.png';
import {Link,NavLink} from "react-router-dom";
const SideBar = (props) =>{
    return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Main Sidebar Container */}
                {/* Brand Logo */}
                <Link to={'/'} className="brand-link">
                    <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" ></img>
                        <span className="brand-text font-weight-light">OBSS</span>
                </Link>

                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={userProfile} className="img-circle elevation-2" alt="User Image"></img>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"></input>
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                        </div>
                    </div>

                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                                 with font-awesome or any other icon font library */}
                            <li className="nav-item">
                                <NavLink to={'/Dashboard/Users'} className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Todo List
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
    )
}

export default SideBar;