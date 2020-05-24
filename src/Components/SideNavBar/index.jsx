// Imports
import React,{ PureComponent } from 'react'

export class SideNavBar extends React.Component {

    componentDidMount(){
       // if(typeof(document) !== 'undefined'){

    }

    renderSideMenu = () => {
      return (    <nav id="sidebar">
                      <div className="sidebar-header">
                          <h3>Bootstrap Sidebar</h3>
                      </div>

                      <ul className="list-unstyled components">
                          <p>Dummy Heading</p>
                          <li className="active">
                              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                              <ul className="collapse list-unstyled" id="homeSubmenu">
                                  <li>
                                      <a href="#">Home 1</a>
                                  </li>
                                  <li>
                                      <a href="#">Home 2</a>
                                  </li>
                                  <li>
                                      <a href="#">Home 3</a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="#">About</a>
                          </li>
                          <li>
                              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                              <ul className="collapse list-unstyled" id="pageSubmenu">
                                  <li>
                                      <a href="#">Page 1</a>
                                  </li>
                                  <li>
                                      <a href="#">Page 2</a>
                                  </li>
                                  <li>
                                      <a href="#">Page 3</a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="#">Portfolio</a>
                          </li>
                          <li>
                              <a href="#">Contact</a>
                          </li>
                      </ul>

                  </nav>)
    }


    renderSimpleSideMenu = () => {
      return (<div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Hi, Doc </div>
                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                  <a href="#" className="list-group-item list-group-item-action bg-light">Patient List</a>
                  <a href="#" className="list-group-item list-group-item-action bg-light">Appointment</a>
                  <a href="#" className="list-group-item list-group-item-action bg-light">Medical Assistant</a>
                  <a href="#" className="list-group-item list-group-item-action bg-light">My Profile</a>
                  <a href="#" className="list-group-item list-group-item-action bg-light">Logout</a>
                </div>
              </div>)
    }


    render() {
      return (this.renderSimpleSideMenu());
      return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">

                    </div>
                    <div className="sidebar-brand-text mx-3">Hi! <sup>Doc</sup></div>
                  </a>

                  <hr className="sidebar-divider my-0" />

                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      <i className="fas fa-fw fa-tachometer-alt"></i>
                      <span>Dashboard</span></a>
                  </li>

                  <hr className="sidebar-divider" />

                  <div className="sidebar-heading">
                    Interface
                  </div>

                  <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      <i className="fas fa-fw fa-cog"></i>
                      <span>Components</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                      <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                      <i className="fas fa-fw fa-wrench"></i>
                      <span>Utilities</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                      <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                      </div>
                    </div>
                  </li>

                  <hr className="sidebar-divider" />

                  <div className="sidebar-heading">
                    Addons
                  </div>

                  <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                      <i className="fas fa-fw fa-folder"></i>
                      <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                      <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                      <i className="fas fa-fw fa-chart-area"></i>
                      <span>Charts</span></a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                      <i className="fas fa-fw fa-table"></i>
                      <span>Tables</span></a>
                  </li>

                  <hr className="sidebar-divider d-none d-md-block" />

                  <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                  </div>

                </ul>)
    }


}
