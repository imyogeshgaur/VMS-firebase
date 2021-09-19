import React from 'react'
import { NavLink } from 'react-router-dom'

const UserSideBar = (props) => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/userprofile">
                        <i className={props.mode === "light" ? "form-check-label  text-dark fa fa-user" : "form-check-label text-light fa fa-user"} aria-hidden="true"></i>
                        <span className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"}>My Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/usersupport">
                        <i className={props.mode === "light" ? "form-check-label  text-dark fa fa-comment-o" : "form-check-label text-light fa fa-comment-o"} aria-hidden="true"></i>
                        <span className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"}>Support</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user/login">
                        <i className={props.mode === "light" ? "form-check-label  text-dark fa fa-power-off" : "form-check-label text-light fa fa-power-off"} aria-hidden="true"></i>
                        <span className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"}>Logout</span>
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default UserSideBar
