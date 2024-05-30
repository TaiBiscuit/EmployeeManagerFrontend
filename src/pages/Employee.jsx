import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export const Employee = () => {
    const [employeeArr, setEmployeeArr] = useState([]);
    const navigate = useNavigate();

    function getAllEmployee() {
        EmployeeService.getAllEmployee()
        .then(res => {setEmployeeArr(res.data)})
        .catch(e => console.log(e));
    }

    function goToUpdate(e, id) {
        e.preventDefault();
        navigate(`/updateemployee/${id}`)
    }

    function deleteEmployee(e, id) {
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then(getAllEmployee())
        .catch(e => console.log(e));
    }


    useEffect(() => {
        getAllEmployee()
    }, [])

    useEffect(() => {
        getAllEmployee();
    }, [deleteEmployee])

    return (
    <>
    <div className="employee-container">
        <div className="employee-section">
            <div className="top">
                <div className="user">
                    <p>Admin</p>
                    <a href=""><button className="log-out-btn" onClick={(e) => goLogOut(e)}>Log Out</button></a>
                </div>
                <div className="user-box-top">
                    <div className="full-name">Full Name</div>
                    <div className="email">Email</div>
                    <div className="role">Role</div>
                    <div className="project">Main Project</div>
                    <div className="update">Update</div>
                    <div className="delete">Delete</div>
                </div>
            </div>
            <div className="bottom">
                <div className="menu-section">
                    <div className="user-btn-section">
                            <a href="/employee"><button className="user-btn">Employees</button></a>
                            <a href="/projects"><button className="user-btn">Projects</button></a>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="user-box">
                            <div className="full-name"><p>Natasha Gomez</p></div>
                            <div className="email"><p>abc@gmail.com</p></div>
                            <div className="role"><p>1</p></div>
                            <div className="update"><a href="#" className="up-btn">Update</a></div>
                            <div className="delete"><a href="#" className="del-btn">Delete</a></div>
                        </div>
                        {employeeArr.map(employee => {
                            return(
                                <>
                                <div className="user-box" key={employee.id}>
                                    <p>{employee.firstName} {employee.lastName}</p>
                                    <p>{employee.email}</p>
                                    <p>{employee.rol}</p>
                                    {
                                        employee.project ?
                                        <>
                                            <p>{employee.project}</p>
                                        </>
                                        :
                                        <>
                                            <p>NONE</p>
                                        </>
                                    }
                                    <a onClick={(e) => goToUpdate(e, employee.id)} className="up-btn">Update</a>
                                    <a onClick={(e) => deleteEmployee(e, employee.id)} className="del-btn">Delete</a>
                                </div>
                                </>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    <a href="/addemployee"><button className="inter-btn">Create a new employee</button></a>
    <a href="/"><button className="inter-btn">Go Back</button></a>
    </>
    )
}