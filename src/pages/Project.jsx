import React, { useEffect, useState } from "react";
import ProjectService from "../services/ProjectService";
import { useNavigate } from "react-router-dom";

export const Project = () => {
    const [projectArr, setProjectArr] = useState([]);
    const navigate = useNavigate();

    function getAllProjects() {
        ProjectService.getAllProjects()
        .then(res => {setProjectArr(res.data)})
        .catch(e => console.log(e));
    }

    function goToUpdate(e, id) {
        e.preventDefault();
        navigate(`/updateproject/${id}`)
    } 

    function deleteProject(e, id) {
        e.preventDefault();
        ProjectService.deleteProject(id)
        .then(getAllProjects())
        .catch(e => console.log(e));
    }


    useEffect(() => {
        getAllProjects();
    }, [])

    useEffect(() => {
        getAllProjects();
    }, [deleteProject])

    return (
    <>
    <div className="employee-container">
        <div className="menu-section">
            <div className="user">
                <p>Admin</p>
                <a href=""><button className="log-out-btn">Log Out</button></a>
            </div>
            <div className="user-btn-section">
                <a href="/employee"><button className="user-btn">Employees</button></a>
                <a href="/projects"><button className="user-btn">Projects</button></a>
            </div>
        </div>
        <div className="employee-section">
            <div className="project-box-top">
            <div className="full-name sec">Project</div>
            <div className="email sec">Id</div>
            <div className="role sec">Employee in Charge</div>
            <div className="update">Update</div>
            <div className="delete">Delete</div>
            </div>
        <div className="project-box">
            <div className="full-name sec"><p>Nico Campos</p></div>
            <div className="email sec"><p>a@gmail.com</p></div>
            <div className="role sec"><p>2</p></div>
            <div className="update"><a href="#" className="up-btn">Update</a></div>
            <div className="delete"><a href="#" className="del-btn">Delete</a></div>
        </div>
        {projectArr.map(project => {
            return(
                <>
                <div className="project-box" key={project.id}>
                    <p>{project.name}</p>
                    <p>{project.id}</p>
                    {
                        project.employee ?
                        <>
                            <p>{project.employee}</p>
                        </>
                        :
                        <>
                            <button>Add Employee</button>
                        </>
                    }
                    <a onClick={(e) => goToUpdate(e, project.id)} className="up-btn">Update</a>
                    <a onClick={(e) => deleteProject(e, project.id)} className="del-btn">Delete</a>
                </div>
                </>
            )
        })}
        </div>
    </div>
    <a href="/addproject"><button className="inter-btn">Create a new project</button></a>
    <a href="/"><button className="inter-btn">Go Back</button></a>
    </>
    )
}