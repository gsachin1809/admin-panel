// Imports
import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import * as action from './action';

class Home extends React.Component {

    render() {
      console.log("props to display ",this.props);
      return (<div className="container body">
                  <div className="main_container">
                    <div className="col-md-3 left_col">
                      <div className="left_col scroll-view">
                        <div className="navbar nav_title" style={{"border":"0"}}>
                          <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
                        </div>

                        <div className="clearfix"></div>

                        <div className="profile clearfix">
                          <div className="profile_pic">
                            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                          </div>
                          <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>John Doe</h2>
                          </div>
                        </div>

                        <br />

                        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                          <div className="menu_section">
                            <h3>General</h3>
                            <ul className="nav side-menu">
                              <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                  <li><a href="index.html">Dashboard</a></li>
                                  <li><a href="index2.html">Dashboard2</a></li>
                                  <li><a href="index3.html">Dashboard3</a></li>
                                </ul>
                              </li>
                              <li><a><i className="fa fa-edit"></i> Forms <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                  <li><a href="form.html">General Form</a></li>
                                  <li><a href="form_advanced.html">Advanced Components</a></li>
                                  <li><a href="form_validation.html">Form Validation</a></li>
                                  <li><a href="form_wizards.html">Form Wizard</a></li>
                                  <li><a href="form_upload.html">Form Upload</a></li>
                                  <li><a href="form_buttons.html">Form Buttons</a></li>
                                </ul>
                              </li>
                              <li><a><i className="fa fa-desktop"></i> UI Elements <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                  <li><a href="general_elements.html">General Elements</a></li>
                                  <li><a href="media_gallery.html">Media Gallery</a></li>
                                  <li><a href="typography.html">Typography</a></li>
                                  <li><a href="icons.html">Icons</a></li>
                                  <li><a href="glyphicons.html">Glyphicons</a></li>
                                  <li><a href="widgets.html">Widgets</a></li>
                                  <li><a href="invoice.html">Invoice</a></li>
                                  <li><a href="inbox.html">Inbox</a></li>
                                  <li><a href="calendar.html">Calendar</a></li>
                                </ul>
                              </li>
                              <li><a><i className="fa fa-table"></i> Tables <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                  <li><a href="tables.html">Tables</a></li>
                                  <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                                </ul>
                              </li>
                              <li><a><i className="fa fa-bar-chart-o"></i> Data Presentation <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                  <li><a href="chartjs.html">Chart JS</a></li>
                                  <li><a href="chartjs2.html">Chart JS2</a></li>
                                  <li><a href="morisjs.html">Moris JS</a></li>
                                  <li><a href="echarts.html">ECharts</a></li>
                                  <li><a href="other_charts.html">Other Charts</a></li>
                                </ul>
                              </li>
                              <li><a><i className="fa fa-clone"></i>Layouts <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                  <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                                  <li><a href="fixed_footer.html">Fixed Footer</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="menu_section">
                            <h3>Live On</h3>
                            <ul className="nav side-menu">
                              <li><a><i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                  <li><a href="e_commerce.html">E-commerce</a></li>
                                  <li><a href="projects.html">Projects</a></li>
                                  <li><a href="project_detail.html">Project Detail</a></li>
                                  <li><a href="contacts.html">Contacts</a></li>
                                  <li><a href="profile.html">Profile</a></li>
                                </ul>
                              </li>
                              <li><a><i className="fa fa-windows"></i> Extras <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                  <li><a href="page_403.html">403 Error</a></li>
                                  <li><a href="page_404.html">404 Error</a></li>
                                  <li><a href="page_500.html">500 Error</a></li>
                                  <li><a href="plain_page.html">Plain Page</a></li>
                                  <li><a href="login.html">Login Page</a></li>
                                  <li><a href="pricing_tables.html">Pricing Tables</a></li>
                                </ul>
                              </li>
                              <li><a><i className="fa fa-sitemap"></i> Multilevel Menu <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                    <li><a href="#level1_1">Level One</a></li>
                                    <li><a>Level One<span className="fa fa-chevron-down"></span></a>
                                      <ul className="nav child_menu">
                                        <li className="sub_menu"><a href="level2.html">Level Two</a>
                                        </li>
                                        <li><a href="#level2_1">Level Two</a>
                                        </li>
                                        <li><a href="#level2_2">Level Two</a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li><a href="#level1_2">Level One</a>
                                    </li>
                                </ul>
                              </li>
                              <li><a href="javascript:void(0)"><i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
                            </ul>
                          </div>

                        </div>



                        <div className="sidebar-footer hidden-small">
                          <a data-toggle="tooltip" data-placement="top" title="Settings">
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                          </a>
                          <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                          </a>
                          <a data-toggle="tooltip" data-placement="top" title="Lock">
                            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                          </a>
                          <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="top_nav">
                        <div className="nav_menu">
                            <div className="nav toggle">
                              <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                            </div>
                            <nav className="nav navbar-nav">
                            <ul className=" navbar-right">
                              <li className="nav-item dropdown open" style={{"padding-left":"15px" }}>
                                <a href="javascript:;" className="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                                  <img src="images/img.jpg" alt="" />John Doe
                                </a>
                                <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                                  <a className="dropdown-item"  href="javascript:;"> Profile</a>
                                    <a className="dropdown-item"  href="javascript:;">
                                      <span className="badge bg-red pull-right">50%</span>
                                      <span>Settings</span>
                                    </a>
                                <a className="dropdown-item"  href="javascript:;">Help</a>
                                  <a className="dropdown-item"  href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
                                </div>
                              </li>

                              <li role="presentation" className="nav-item dropdown open">
                                <a href="javascript:;" className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                                  <i className="fa fa-envelope-o"></i>
                                  <span className="badge bg-green">6</span>
                                </a>
                                <ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                                  <li className="nav-item">
                                    <a className="dropdown-item">
                                      <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                      <span>
                                        <span>John Smith</span>
                                        <span className="time">3 mins ago</span>
                                      </span>
                                      <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="dropdown-item">
                                      <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                      <span>
                                        <span>John Smith</span>
                                        <span className="time">3 mins ago</span>
                                      </span>
                                      <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="dropdown-item">
                                      <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                      <span>
                                        <span>John Smith</span>
                                        <span className="time">3 mins ago</span>
                                      </span>
                                      <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="dropdown-item">
                                      <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                      <span>
                                        <span>John Smith</span>
                                        <span className="time">3 mins ago</span>
                                      </span>
                                      <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <div className="text-center">
                                      <a className="dropdown-item">
                                        <strong>See All Alerts</strong>
                                        <i className="fa fa-angle-right"></i>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>

                    <div className="right_col" role="main">
                      <div className="row" style={{"display": "inline-block"}}>
                        <div className=" top_tiles" style={{"margin": "10px 0"}}>
                          <div className="col-md-3 col-sm-3  tile">
                            <span>Total Sessions</span>
                            <h2>231,809</h2>
                            <span className="sparkline_one" style={{"height": "160px"}}>
                                  <canvas width="200" height="60" style={{"display": "inline-block", "vertical-align": "top", "width": "94px", "height": "30px"}}></canvas>
                              </span>
                          </div>
                          <div className="col-md-3 col-sm-3  tile">
                            <span>Total Sessions</span>
                            <h2>231,809</h2>
                            <span className="sparkline_one" style={{"height": "160px"}}>
                                  <canvas width="200" height="60" style={{"display": "inline-block", "vertical-align": "top", "width": "94px", "height": "30px"}}></canvas>
                              </span>
                          </div>
                          <div className="col-md-3 col-sm-3  tile">
                            <span>Total Sessions</span>
                            <h2>231,809</h2>
                            <span className="sparkline_one" style={{"height": "160px"}}>
                                  <canvas width="200" height="60" style={{"display": "inline-block", "vertical-align": "top", "width": "94px", "height": "30px"}}></canvas>
                              </span>
                          </div>
                          <div className="col-md-3 col-sm-3  tile">
                            <span>Total Sessions</span>
                            <h2>231,809</h2>
                            <span className="sparkline_one" style={{"height": "160px"}}>
                                  <canvas width="200" height="60" style={{"display": "inline-block", "vertical-align": "top", "width": "94px", "height": "30px"}}></canvas>
                              </span>
                          </div>


                        </div>
                      </div>
                        <br/>


                        <div className="row">
                          <div className="col-md-12 col-sm-12 ">
                            <div className="dashboard_graph x_panel">
                              <div className="x_title">
                                <div className="col-md-6">
                                  <h3>Network Activities <small>Graph title sub-title</small></h3>
                                </div>
                                <div className="col-md-6">
                                  <div id="reportrange" className="pull-right" style={{"background": "#fff","cursor": "pointer" , "padding": "5px 10px", "border": "1px solid #ccc"}}>
                                    <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
                                    <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
                                  </div>
                                </div>
                              </div>
                              <div className="x_content">
                                <div className="demo-container" style={{"height":"250px"}}>
                                  <div id="chart_plot_03" className="demo-placeholder"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="row">
                          <div className="col-md-4 col-sm-6 ">
                            <div className="x_panel fixed_height_320">
                              <div className="x_title">
                                <h2>App Devices <small>Sessions</small></h2>
                                <ul className="nav navbar-right panel_toolbox">
                                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                  </li>
                                  <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Settings 1</a>
                                        <a className="dropdown-item" href="#">Settings 2</a>
                                      </div>
                                  </li>
                                  <li><a className="close-link"><i className="fa fa-close"></i></a>
                                  </li>
                                </ul>
                                <div className="clearfix"></div>
                              </div>
                              <div className="x_content">
                                <h4>App Versions</h4>
                                <div className="widget_summary">
                                  <div className="w_left w_25">
                                    <span>1.5.2</span>
                                  </div>
                                  <div className="w_center w_55">
                                    <div className="progress">
                                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "66%"}}>
                                        <span className="sr-only">60% Complete</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w_right w_20">
                                    <span>123k</span>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>

                                <div className="widget_summary">
                                  <div className="w_left w_25">
                                    <span>1.5.3</span>
                                  </div>
                                  <div className="w_center w_55">
                                    <div className="progress">
                                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "45%"}}>
                                        <span className="sr-only">60% Complete</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w_right w_20">
                                    <span>53k</span>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                                <div className="widget_summary">
                                  <div className="w_left w_25">
                                    <span>1.5.4</span>
                                  </div>
                                  <div className="w_center w_55">
                                    <div className="progress">
                                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "25%"}}>
                                        <span className="sr-only">60% Complete</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w_right w_20">
                                    <span>23k</span>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                                <div className="widget_summary">
                                  <div className="w_left w_25">
                                    <span>1.5.5</span>
                                  </div>
                                  <div className="w_center w_55">
                                    <div className="progress">
                                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "5%"}}>
                                        <span className="sr-only">60% Complete</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w_right w_20">
                                    <span>3k</span>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                                <div className="widget_summary">
                                  <div className="w_left w_25">
                                    <span>0.1.5.6</span>
                                  </div>
                                  <div className="w_center w_55">
                                    <div className="progress">
                                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "2%"}}>
                                        <span className="sr-only">60% Complete</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w_right w_20">
                                    <span>1k</span>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>

                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 col-sm-6 ">
                            <div className="x_panel tile fixed_height_320">
                              <div className="x_title">
                                <h2>Daily users <small>Sessions</small></h2>
                                <ul className="nav navbar-right panel_toolbox">
                                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                  </li>
                                  <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Settings 1</a>
                                        <a className="dropdown-item" href="#">Settings 2</a>
                                      </div>
                                  </li>
                                  <li><a className="close-link"><i className="fa fa-close"></i></a>
                                  </li>
                                </ul>
                                <div className="clearfix"></div>
                              </div>
                              <div className="x_content">
                              <table className="" style={{"width": "100%"}}>
                                <tr>
                                  <th style={{"width": "37%"}}>
                                    <p>Top 5</p>
                                  </th>
                                  <th>
                                    <div className="col-lg-7 col-md-7 col-sm-7 ">
                                      <p className="">Device</p>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-5 ">
                                      <p className="">Progress</p>
                                    </div>
                                  </th>
                                </tr>
                                <tr>
                                    <td>
                                        <canvas className="canvasDoughnut" height="140" width="140" style={{"margin": "15px 10px 10px 0"}}></canvas>
                                      </td>
                                  <td>
                                    <table className="tile_info">
                                      <tr>
                                        <td>
                                          <p><i className="fa fa-square blue"></i>IOS </p>
                                        </td>
                                        <td>30%</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p><i className="fa fa-square green"></i>Android </p>
                                        </td>
                                        <td>10%</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p><i className="fa fa-square purple"></i>Blackberry </p>
                                        </td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p><i className="fa fa-square aero"></i>Symbian </p>
                                        </td>
                                        <td>15%</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p><i className="fa fa-square red"></i>Others </p>
                                        </td>
                                        <td>30%</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 col-sm-6 ">
                            <div className="x_panel fixed_height_320">
                              <div className="x_title">
                                <h2>Profile Settings <small>Sessions</small></h2>
                                <ul className="nav navbar-right panel_toolbox">
                                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                  </li>
                                  <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Settings 1</a>
                                        <a className="dropdown-item" href="#">Settings 2</a>
                                      </div>
                                  </li>
                                  <li><a className="close-link"><i className="fa fa-close"></i></a>
                                  </li>
                                </ul>
                                <div className="clearfix"></div>
                              </div>
                              <div className="x_content">
                                <div className="dashboard-widget-content">
                                  <ul className="quick-list">
                                    <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a></li>
                                    <li><i className="fa fa-thumbs-up"></i><a href="#">Favorites</a></li>
                                    <li><i className="fa fa-calendar-o"></i><a href="#">Activities</a></li>
                                    <li><i className="fa fa-cog"></i><a href="#">Settings</a></li>
                                    <li><i className="fa fa-area-chart"></i><a href="#">Logout</a></li>
                                  </ul>

                                  <div className="sidebar-widget">
                                    <h4>Profile Completion</h4>
                                    <canvas width="150" height="80" id="chart_gauge_01" className="" style={{"width": "160px; height: 100px"}}></canvas>
                                    <div className="goal-wrapper">
                                      <span id="gauge-text" className="gauge-value gauge-chart pull-left">0</span>
                                      <span className="gauge-value pull-left">%</span>
                                      <span id="goal-text" className="goal-value pull-right">100%</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 col-sm-6  widget_tally_box">
                            <div className="x_panel">
                              <div className="x_title">
                                <h2>User Uptake</h2>
                                <ul className="nav navbar-right panel_toolbox">
                                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                  </li>
                                  <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Settings 1</a>
                                        <a className="dropdown-item" href="#">Settings 2</a>
                                      </div>
                                  </li>
                                  <li><a className="close-link"><i className="fa fa-close"></i></a>
                                  </li>
                                </ul>
                                <div className="clearfix"></div>
                              </div>
                              <div className="x_content">

                                <div id="graph_bar" style={{ "width":"100%", "height":"200px"}}></div>

                                <div className=" bg-white progress_summary">

                                  <div className="row">
                                    <div className="progress_title">
                                      <span className="left">Escudor Wireless 1.0</span>
                                      <span className="right">This sis</span>
                                      <div className="clearfix"></div>
                                    </div>

                                    <div className="">
                                      <span>SSD</span>
                                    </div>
                                    <div className="">
                                      <div className="progress progress_sm">
                                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="89"></div>
                                      </div>
                                    </div>
                                    <div className=" more_info">
                                      <span>89%</span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="progress_title">
                                      <span className="left">Mobile Access</span>
                                      <span className="right">Smart Phone</span>
                                      <div className="clearfix"></div>
                                    </div>

                                    <div className="">
                                      <span>App</span>
                                    </div>
                                    <div className="">
                                      <div className="progress progress_sm">
                                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="79"></div>
                                      </div>
                                    </div>
                                    <div className=" more_info">
                                      <span>79%</span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="progress_title">
                                      <span className="left">WAN access users</span>
                                      <span className="right">Total 69%</span>
                                      <div className="clearfix"></div>
                                    </div>

                                    <div className="">
                                      <span>Usr</span>
                                    </div>
                                    <div className="">
                                      <div className="progress progress_sm">
                                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="69"></div>
                                      </div>
                                    </div>
                                    <div className=" more_info">
                                      <span>69%</span>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 col-sm-6 ">
                            <div className="x_panel">
                              <div className="x_title">
                                <h2>Today's Weather <small>Sessions</small></h2>
                                <ul className="nav navbar-right panel_toolbox">
                                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                  </li>
                                  <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Settings 1</a>
                                        <a className="dropdown-item" href="#">Settings 2</a>
                                      </div>
                                  </li>
                                  <li><a className="close-link"><i className="fa fa-close"></i></a>
                                  </li>
                                </ul>
                                <div className="clearfix"></div>
                              </div>
                              <div className="x_content">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="temperature"><b>Monday</b>, 07:30 AM
                                      <span>F</span>
                                      <span><b>C</b>
                                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="weather-icon">
                                      <span>
                                                          <canvas height="84" width="84" id="partly-cloudy-day"></canvas>
                                                      </span>

                                    </div>
                                  </div>
                                  <div className="col-sm-8">
                                    <div className="weather-text">
                                      <h2>Texas
                                                          <br /><i>Partly Cloudy Day</i>
                                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="weather-text pull-right">
                                    <h3 className="degrees">23</h3>
                                  </div>
                                </div>
                                <div className="clearfix"></div>


                                <div className="row weather-days">
                                  <div className="col-sm-2">
                                    <div className="daily-weather">
                                      <h2 className="day">Mon</h2>
                                      <h3 className="degrees">25</h3>
                                      <span>
                                                              <canvas id="clear-day" width="32" height="32">
                                                              </canvas>

                                                      </span>
                                      <h5>15
                                                          <i>km/h</i>
                                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-sm-2">
                                    <div className="daily-weather">
                                      <h2 className="day">Tue</h2>
                                      <h3 className="degrees">25</h3>
                                      <canvas height="32" width="32" id="rain"></canvas>
                                      <h5>12
                                                          <i>km/h</i>
                                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-sm-2">
                                    <div className="daily-weather">
                                      <h2 className="day">Wed</h2>
                                      <h3 className="degrees">27</h3>
                                      <canvas height="32" width="32" id="snow"></canvas>
                                      <h5>14
                                                          <i>km/h</i>
                                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-sm-2">
                                    <div className="daily-weather">
                                      <h2 className="day">Thu</h2>
                                      <h3 className="degrees">28</h3>
                                      <canvas height="32" width="32" id="sleet"></canvas>
                                      <h5>15
                                                          <i>km/h</i>
                                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-sm-2">
                                    <div className="daily-weather">
                                      <h2 className="day">Fri</h2>
                                      <h3 className="degrees">28</h3>
                                      <canvas height="32" width="32" id="wind"></canvas>
                                      <h5>11
                                                          <i>km/h</i>
                                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-sm-2">
                                    <div className="daily-weather">
                                      <h2 className="day">Sat</h2>
                                      <h3 className="degrees">26</h3>
                                      <canvas height="32" width="32" id="cloudy"></canvas>
                                      <h5>10
                                                          <i>km/h</i>
                                                      </h5>
                                    </div>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                              </div>
                            </div>

                          </div>

                          <div className="col-md-4 col-sm-6 ">
                            <div className="x_panel fixed_height_320">
                              <div className="x_title">
                                <h2>Incomes <small>Sessions</small></h2>
                                <ul className="nav navbar-right panel_toolbox">
                                  <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                  </li>
                                  <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Settings 1</a>
                                        <a className="dropdown-item" href="#">Settings 2</a>
                                      </div>
                                  </li>
                                  <li><a className="close-link"><i className="fa fa-close"></i></a>
                                  </li>
                                </ul>
                                <div className="clearfix"></div>
                              </div>
                              <div className="x_content">
                                <div className="dashboard-widget-content">
                                  <ul className="quick-list">
                                    <li><i className="fa fa-bars"></i><a href="#">Subscription</a></li>
                                    <li><i className="fa fa-bar-chart"></i><a href="#">Auto Renewal</a> </li>
                                    <li><i className="fa fa-support"></i><a href="#">Help Desk</a> </li>
                                    <li><i className="fa fa-heart"></i><a href="#">Donations</a> </li>
                                  </ul>

                                  <div className="sidebar-widget">
                                    <h4>Goal</h4>
                                    <canvas width="150" height="80" id="chart_gauge_02" className="" style={{ "width": "160px", "height": "100px"}}></canvas>
                                    <div className="goal-wrapper">
                                      <span className="gauge-value pull-left">$</span>
                                      <span id="gauge-text2" className="gauge-value pull-left">3,200</span>
                                      <span id="goal-text2" className="goal-value pull-right">$5,000</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <footer>
                      <div className="pull-right">
                        Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
                      </div>
                      <div className="clearfix"></div>
                    </footer>
                  </div>)
    }


}
const mapStateToProps = (state) => {
  return {
    articles : state.articles
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateArticals : (name) =>{ dispatch({ type: "UPDATE_ARTICAL", payload : name }) },
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(Home);
