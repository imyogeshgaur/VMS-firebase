import React from "react"
import "../../css/DashBorad.css"
import DashboardHeader from "../assets/DashboardHeader"
import AdminSideBar from "../assets/AdminSideBar"

const Profile = (props) => {
    return (
        <>
            <DashboardHeader mode={props.mode} ToggleMode={props.ToggleMode} />
            <div className="body">
                <nav className={props.mode === "light" ? "side-bar" : "side-bar-dark"}>
                    <div className="user-p">
                        <img src="" alt="" />
                        <h4>Elias</h4>
                    </div>
                    <AdminSideBar mode={props.mode} />
                </nav>
                <section className="section-1">
                    <h1 className={props.mode === "light" ? "text-dark" : "text-light"}>Profile</h1>
                </section>
            </div>
        </>
    )
}

export default Profile
