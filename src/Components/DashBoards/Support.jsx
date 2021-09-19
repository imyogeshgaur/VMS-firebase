import React from "react"
import { NavLink } from 'react-router-dom'
import "../../css/DashBorad.css"

const Support = (props) => {
    return (
        <>
            <input type="checkbox" id="checkbox" />
            <header className={props.mode === "light" ? "header" : "header-dark"}>
                <h2 className={props.mode === "light" ? "u-name text-dark" : "u-name text-light"} > VMS </h2>
                <div className="form-check form-switch">
                <label className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"} htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.ToggleMode} />
                <label for="checkbox">
                        <i id="navbtn" className={props.mode === "light" ? "fa fa-bars text-dark" : "fa fa-bars text-light"} aria-hidden="true"></i>
                </label>
            </div>
            </header>
            <div className="body">
                <nav className={props.mode === "light" ? "side-bar" : "side-bar-dark"}>
                    <div className="user-p">
                        <img src="" alt="" />
                        <h4>Elias</h4>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <i className={props.mode === "light" ? "form-check-label  text-dark fa fa-user" : "form-check-label text-light fa fa-user"} aria-hidden="true"></i>
                                <span className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"}>My Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <i className={props.mode === "light" ? "form-check-label  text-dark fa fa-users" : "form-check-label text-light fa fa-users"} aria-hidden="true"></i>
                                <span className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"}>Users Details</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <i className={props.mode === "light" ? "form-check-label  text-dark fa fa-comment-o" : "form-check-label text-light fa fa-comment-o"} aria-hidden="true"></i>
                                <span className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"}>Support</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <i className={props.mode === "light" ? "form-check-label  text-dark fa fa-power-off" : "form-check-label text-light fa fa-power-off"} aria-hidden="true"></i>
                                <span className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"}>Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <section className="section-1">
                    
                </section>
            </div>
        </>
    )
}

export default Support
