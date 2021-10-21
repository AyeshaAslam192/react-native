import API from '../API.js';

class Login  extends API {

    fetchLoginCredentials(data) {
        return new Promise((resolve, reject) => {
          super
            .post('login', data).then((resp) => { 
                console.log(resp);
                resolve(resp)
             })
            .catch((error) => 
            {console.log(error.response)
                reject(error)});
        });
    }
  
}

export default Login;
