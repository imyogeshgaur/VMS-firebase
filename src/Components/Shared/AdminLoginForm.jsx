import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { authentication } from '../DataBase/Firebase';

const AdminLoginForm = (props) => {
    const history = useHistory();
    const [state, setstate] = useState({
        adminField1: "",
        adminField2: ""
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

    const { adminField1, adminField2 } = state;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!adminField1 || !adminField2) {
            props.showAlert("Please fill all the Fields Correctly!!!", "danger")
        } else {
            if (adminField2.length < 6) {
                props.showAlert("Please Fill all the Fields Correctly !!!", "danger");
            } else {
                try {
                    await authentication.signInWithEmailAndPassword(adminField1, adminField2);
                    props.showAlert("Logged In Sucessfully !!!", "success");
                    history.push('/');
                } catch (error) {
                    props.showAlert(`${error.message}`, "danger");
                }
            }
        }
    }
    return (
        <>
            <div className="container-fluid my-5" style={{ width: "20rem" }}>
                <h3 style={{ textAlign: "center" }} className={props.mode === "light" ? "text-dark" : "text-light"}>Login Here</h3>
                <div className="mb-3 mt-4">
                    <input type="text" className="form-control" placeholder="Enter Your UserName/Email" autoComplete="no" value={state.adminField1} name="adminField1" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Enter Your Password" autoComplete="no" value={state.adminField2} name="adminField2" onChange={handleInput} />
                </div>
                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default AdminLoginForm
