import axios from 'axios';

const BASE_URL = "http://localhost:8080/projects";

axios({
    method: 'get',
    headers:'Access-Control-Allow-Headers',
    url: `http://localhost:8080/`,
}); 

class ProjectService{

    getAllProjects(){
        return axios.get(BASE_URL);
    }

    getProjectById(id){
        return axios.get(`${BASE_URL}/${id}`)
    }

    saveProject(employeeData){
        return axios.post(BASE_URL, employeeData)
    }

    updateProject(id, employeeData){
        return axios.put(`${BASE_URL}/${id}`, employeeData)
    }

    deleteProject(id){
        return axios.delete(`${BASE_URL}/${id}`)
    }
}

export default new ProjectService();