import React from "react"
import DashboardHeader from "../assets/DashboardHeader"
import AdminSideBar from "../assets/AdminSideBar"
import "../../css/DashBorad.css"
import "../../css/DashBorad.css"

const UserDetails = (props) => {
    return (
        <>
        <DashboardHeader mode={props.mode} ToggleMode={props.ToggleMode} />
        <div className="body">
            <nav className={props.mode === "light" ? "side-bar" : "side-bar-dark"}>
                <div className="user-p">
                    <img src="" alt="" />
                    <h4>Yogesh</h4>
                </div>
                <AdminSideBar mode={props.mode} />
            </nav>
                <section className="section-1">
                    <h1 className={props.mode === "light" ? "text-dark" : "text-light"}>Details</h1>
                </section>
            </div>
        </>
    )
}

export default UserDetails
