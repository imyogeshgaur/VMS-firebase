import React from 'react'

const DashboardHeader = (props) => {
    return (
        <>
            <input type="checkbox" id="checkbox" />
            <header className={props.mode === "light" ? "header" : "header-dark"}>
                <h2 className={props.mode === "light" ? "u-name text-dark" : "u-name text-light"} > VMS </h2>
                <div className="form-check form-switch">
                    <label className={props.mode === "light" ? " text-dark" : " text-light"} htmlFor="flexSwitchCheckDefault" style={{ display: "inline-flex" }}>{props.mode === "light" ? "Light" : "Dark"}</label>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.ToggleMode} />
                    <label for="checkbox">
                        <i id="navbtn" className={props.mode === "light" ? "fa fa-bars text-dark" : "fa fa-bars text-light"} aria-hidden="true"></i>
                    </label>
                </div>
            </header>
        </>
    )
}

export default DashboardHeader
