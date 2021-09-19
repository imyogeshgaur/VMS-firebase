import React from 'react'
import "../../css/DashBorad.css"
import DashboardHeader from "./DashboardHeader"
import AdminSideBar from "./AdminSideBar"

const AdminDashBoard = (props) => {
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
            </div>
        </>
    )
}

export default AdminDashBoard
