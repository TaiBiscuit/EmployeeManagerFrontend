import axios from 'axios';

const BASE_URL = "http://localhost:8080/employee";

axios({
    method: 'get',
    headers:'Access-Control-Allow-Headers',
    url: `http://localhost:8080/`,
}); 

class EmployeeService{

    getAllEmployee(){
        return axios.get(BASE_URL);
    }

    getEmployeeById(id){
        return axios.get(`${BASE_URL}/${id}`)
    }

    saveEmployee(employeeData){
        return axios.post(BASE_URL, employeeData)
    }

    updateEmployee(id, employeeData){
        return axios.put(`${BASE_URL}/${id}`, employeeData)
    }

    deleteEmployee(id){
        return axios.delete(`${BASE_URL}/${id}`)
    }
}

export default new EmployeeService();