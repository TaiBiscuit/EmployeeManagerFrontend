import React from "react";
import EmployeeService from "./EmployeeService";
import { useNavigate, useParams  } from "react-router-dom";

export const UpdateEmployee = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    function submitForm(e){
        e.preventDefault();
        let name = document.getElementById('fname').value; 
        let lastName = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let rol = parseInt(document.getElementById('rol').value);

        const employeeData = {
            firstName: name,
            lastName: lastName,
            email: email,
            rol: rol
        }
        console.log(rol)
        EmployeeService.updateEmployee(id, employeeData);
        navigate('/employee')
    }

    function goBack(e){
        e.preventDefault();
        navigate('/employee')
    }

    return (
    <>
    <div className="addemployee-container">
        <form id="form" onSubmit={(e) => submitForm(e)}>
            <div className="firstName form-div">
                <label htmlFor="firstName" className="contact-label"> New first name:</label>
                <input name="firstName" type="text" className="contact-input" id="fname" required/>
            </div>
            <div className="lastName  form-div">
                <label htmlFor="lastName" className="contact-label">New last name:</label>
                <input name="lastName" type="text" className="contact-input" id="lname" required/>
            </div>
            <div className="email form-div">
                <label htmlFor="email" className="contact-label">New email:</label>
                <input name="email" type="text" className="contact-input" id="email" required/>
            </div>
            <div className="rol form-div">
                <label htmlFor="rol" className="contact-label">Rol:</label>
                <select name="" id="rol">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className="submit form-div">
            <input type="submit" value="Update Employee" id="form-btn" className="form-btn" />
            </div>
        </form>
        <button className="form-btn" onClick={(e) => goBack(e)}>Go Back</button>
    </div>
    </>
    )
}