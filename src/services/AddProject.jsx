import React, { useEffect, useState } from "react";
import EmployeeService from "./EmployeeService";
import ProjectService from "./ProjectService";
import { useNavigate } from "react-router-dom";

export const AddProject = () => {
    const [employeeArr, setEmployeeArr] = useState([]);
    const navigate = useNavigate();

    function getAllEmployee() {
        EmployeeService.getAllEmployee()
        .then(res => {setEmployeeArr(res.data)})
        .catch(e => console.log(e));
    }

    function submitForm(e){
        e.preventDefault();
        let name = document.getElementById('pname').value; 
        let employee = document.getElementById('echarge').value;
        let description = document.getElementById('description').value;
        let selectedEmployee = employeeArr.find(e => e.id == employee)

        const finalEmployee = {
            firstName: selectedEmployee.firstName,
            lastName: selectedEmployee.lastName,
            email: selectedEmployee.email,
            rol: selectedEmployee.rol,
            project: name
        } 

        const projectData = {
            name: name,
            description: description,
            employee: `${selectedEmployee.firstName} ${selectedEmployee.lastName}`
        }

        ProjectService.saveProject(projectData);
        EmployeeService.updateEmployee(selectedEmployee.id, finalEmployee);
        navigate('/projects')
    }

    function goBack(e){
        e.preventDefault();
        navigate('/projects')
    }

    useEffect(() => {
        getAllEmployee();
    }, [])

    return (
    <>
    <div className="addemployee-container">
        <form id="form" onSubmit={(e) => submitForm(e)}>
            <div className="projectName form-div">
                <label htmlFor="projectName" className="contact-label">Project Name:</label>
                <input name="projectName" type="text" className="contact-input" id="pname" required/>
            </div>
            <div className="employeecharge  form-div">
                <label htmlFor="employeecharge" className="contact-label">Employee</label>
                <select name="employeecharge" id="echarge">
                {employeeArr.map(employee => {
                    return(
                        <>
                            <option value={employee.id} key={employee.id}>{employee.firstName + ' ' + employee.lastName}</option>
                        </>
                    )
                })}
                </select>
            </div>
            <div className="description  form-div">
                <label htmlFor="description" className="contact-label">Project Description</label>
                <input name="description" type="text" className="contact-input" id="description" required/>
            </div>
            <div className="submit form-div">
            <input type="submit" value="Create Project" id="form-btn" className="form-btn" />
            </div>
        </form>
        <button className="form-btn" onClick={(e) => goBack(e)}>Go Back</button>
    </div>
    </>
    )
}