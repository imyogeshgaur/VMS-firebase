import React, { useState } from 'react'
import { authentication , database } from '../DataBase/Firebase';
import aes256 from "aes256"

const AdminSignUpForm = (props) => {
    const [state, setstate] = useState({
        adminName: "",
        adminEmail: "",
        adminPhone: "",
        adminAdd1: "",
        adminAdd2: "",
        adminPass: "",
        adminPassC: ""
    });
    const handleInput = (e) =>{
        const { name, value } = e.target;

        setstate((preVal) => {
          return {
            ...preVal,
            [name]: value,
          };
        });
    }

    const { adminName, adminEmail, adminPhone, adminAdd1, adminAdd2, adminPass, adminPassC } = state;

    const handleSumbit = async (e) => {
        e.preventDefault();
        if (!adminName || !adminEmail || !adminPhone || !adminAdd1 || !adminAdd2 || !adminPass || !adminPassC) {
            props.showAlert("Please Fill all The Fields !!!","warning");
        } else {
            if (adminPass !== adminPassC) {
                props.showAlert("Password Not Matched !!!","warning");
            } else if (adminPass.length < 6) {
                props.showAlert("Invalid Password !!!","danger");
            } else if(adminPhone.length !== 10){
                props.showAlert("Invalid Phone Number !!!","danger");
            }
            else {
                try {
                    await authentication.createUserWithEmailAndPassword( adminEmail, adminPass );
                    const passAdmin = await aes256.encrypt("mynameisyogeshgaurandiamawebdevloper",adminPass);
                    await database.collection('admin').add({ adminName, adminEmail, adminPhone, adminAdd1, adminAdd2,passAdmin});
                    props.showAlert("Data Added Sucessfully !!!","success");
                } catch (error) {
                    props.showAlert(`${error.message}`,"danger");
                }
            }
        }
    }
    return (
        <>
            <div className="container-fluid my-3" style={{ width: "20rem" }}>
                <h3 style={{ textAlign: "center" }} className={props.mode === "light" ? "text-dark" : "text-light"}>Register Here</h3>
                <div className="mb-3 mt-4">
                    <input type="text" className="form-control" placeholder="Enter Your Name" autoComplete="no" value={state.adminName} name="adminName" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter Your Email" autoComplete="no" value={state.adminEmail} name="adminEmail" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Phone Number" autoComplete="no" value={state.adminPhone} name="adminPhone" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Address Line 1" autoComplete="no" value={state.adminAdd1} name="adminAdd1" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Address Line 2" autoComplete="no" value={state.adminAdd2} name="adminAdd2" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Enter Your Password" autoComplete="no" value={state.adminPass} name="adminPass" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Re-Type Your Password" autoComplete="no" value={state.adminPassC} name="adminPassC" onChange={handleInput} />
                </div>
                <button className="btn btn-primary" onClick={handleSumbit}>Submit</button>
            </div>
        </>
    )
}

export default AdminSignUpForm
