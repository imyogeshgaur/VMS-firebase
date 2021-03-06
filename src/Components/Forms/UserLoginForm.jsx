import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { authentication } from '../DataBase/Firebase';


const UserLoginForm = (props) => {
    const history = useHistory();
    const [state, setstate] = useState({
        userField1: "",
        userField2: ""
    });
    const handleInput = (e) => {
        const { name, value } = e.target;

        setstate((preVal) => {
            return {
                ...preVal,
                [name]: value
            };
        })
    }

    const { userField1, userField2 } = state

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userField1 || !userField2) {
            props.showAlert("Please Fill all Fields Correctly !!!", "danger");
        } else {
            if (userField2.length < 6) {
                props.showAlert("Please Fill all the Fields Correctly !!!", "danger");
            } else {
                try {
                    await authentication.signInWithEmailAndPassword(userField1, userField2);
                    history.push('/user/dashboard');
                    setstate({
                        userField1: "",
                        userField2: ""
                    })
                } catch (error) {
                    if (error.message === "The password is invalid or the user does not have a password.") {
                        props.showAlert("Invalid Credentials !!!", "danger");
                    }
                    props.showAlert(`${error.message}`, "danger");
                }
            }
        }
    }
    return (
        <>
            <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="row row-cols-2">
                    <div className="card" style={{ width: "22rem", backgroundImage: props.mode === "light" ? `linear-gradient(#169af1,aqua)` : "linear-gradient(0deg, #000000 0%, #04619f 74%)" }}>
                        <div className="card-body">
                            <div className="container-fluid my-5" style={{ width: "20rem" }}>
                                <h3 style={{ textAlign: "center" }} className={props.mode === "light" ? "text-dark" : "text-light"}>Login Here</h3>
                                <div className="mb-3 mt-4">
                                    <input type="text" className="form-control" placeholder="Enter Your Email" autoComplete="no" value={state.userField1} name="userField1" onChange={handleInput} />
                                </div>
                                <div className="mb-3">
                                    <input type={props.visible} className="form-control" placeholder="Enter Your Password" autoComplete="no" value={state.userField2} name="userField2" onChange={handleInput} />
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={props.handleVisiblity} />
                                    <label className={props.mode === "light" ? "form-check-label" : "form-check-label text-light"} for="flexCheckDefault">
                                        Show Password
                                    </label>
                                </div>
                                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLoginForm;
