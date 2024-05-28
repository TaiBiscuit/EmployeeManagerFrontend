import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, Employee, Project } from "../pages/index.js";
import { AddEmployee, UpdateEmployee, AddProject } from '../services/index.js';

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/employee" element={<Employee />}/>
                <Route exact path="/addemployee" element={<AddEmployee />} />
                <Route exact path="/updateemployee/:id" element={<UpdateEmployee />} />
                <Route exact path="/projects" element={<Project />}/>
                <Route exact path="/addproject" element={<AddProject />}/>
            </Routes>
        </BrowserRouter>
    )
}