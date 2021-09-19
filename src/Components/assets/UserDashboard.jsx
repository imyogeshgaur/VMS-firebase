import React from "react"
import "../../css/DashBorad.css"
import DashboardHeader from "./DashboardHeader"
import UserSideBar from "./UserSideBar"

const UserDashBoard = (props) => {
    return (
        <>
        <DashboardHeader mode={props.mode} ToggleMode={props.ToggleMode} />
            <div className="body">
                <nav className={props.mode === "light" ? "side-bar" : "side-bar-dark"}>
                    <div className="user-p">
                        <img src="" alt="" />
                        <h4>Elias</h4>
                    </div>
                    <UserSideBar mode={props.mode} />
                </nav>
            </div>
        </>
    )
}

export default UserDashBoard
