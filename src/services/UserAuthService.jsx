import axios from 'axios';

const BASE_URL = "http://localhost:8080/userauth";

axios({
    method: 'post',
    headers:'Access-Control-Allow-Headers',
    url: `http://localhost:8080/`,
}); 

class UserAuthService{

    userLogIn(reqBody){
        return axios.get(BASE_URL, reqBody);
    }
}

export default new UserAuthService();