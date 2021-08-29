import aes256 from 'aes256';
import React, { useState } from 'react'
import { authentication, database } from '../DataBase/Firebase';

const UserSignUpForm = (props) => {
    const [state, setstate] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userAdd1: "",
        userAdd2: "",
        userPass: "",
        userPassC: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;

        setstate((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    }

    const { userName, userEmail, userPhone, userAdd1, userAdd2, userPass, userPassC } = state;

    const handleSubmit = async () => {
        if (!userName || !userEmail || !userPhone || !userAdd1 || !userAdd2 || !userPass || !userPassC) {
            props.showAlert("Please fill All The Data !!!", "warning")
        } else {
            if (userPass !== userPassC) {
                props.showAlert("Password Not Matched !!!", "warning")
            } else if (userPass.length < 6) {
                props.showAlert("Invalid Password !!!", "danger");
            } else if (userPhone.length !== 10) {
                props.showAlert("Invalid Phone Number !!!", "danger");
            }
            else {
                try {
                    await authentication.createUserWithEmailAndPassword(userEmail, userPass);
                    const passUser = aes256.encrypt('mynameisyogeshgaurandiamawebdeveloper', userPass);
                    await database.collection('user').add({ userName, userEmail, userPhone, userAdd1, userAdd2, passUser });
                    props.showAlert("Data Enterd Sucessfully !!!", "success");
                } catch (error) {
                    props.showAlert(`${error.message}`, "danger")
                }
            }
        }
    }
    return (
        <>
            <div className="container-fluid my-3" style={{ width: "20rem" }}>
                <h3 style={{ textAlign: "center" }} className={props.mode === "light" ? "text-dark" : "text-light"} >Register Here</h3>
                <div className="mb-3 mt-4">
                    <input type="text" className="form-control" placeholder="Enter Your Name" autoComplete="no" value={state.userName} name="userName" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter Your Email" autoComplete="no" value={state.userEmail} name="userEmail" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Phone Number" autoComplete="no" value={state.userPhone} name="userPhone" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Address Line 1" autoComplete="no" value={state.userAdd1} name="userAdd1" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Address Line 2" autoComplete="no" value={state.userAdd2} name="userAdd2" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Enter Your Password" autoComplete="no" value={state.userPass} name="userPass" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Re-Type Your Password" autoComplete="no" value={state.userPassC} name="userPassC" onChange={handleInput} />
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default UserSignUpForm;
