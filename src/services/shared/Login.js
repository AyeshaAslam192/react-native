import API from '../API.js';

class Login  extends API {

    fetchLoginCredentials(data) {
        return new Promise((resolve, reject) => {
          super
            .post('login', data).then((resp) => { 
                resolve(resp)
             })
            .catch((error) => 
            {
                reject(error)});
        });
    }
    verifyToken(data) {
        return new Promise((resolve) => {
          super
            .post('is-verified', data).then((resp) => { 
                resolve(true)
             })
            .catch(() => 
            {
                resolve(false)
            });
        });
    }
  
}

export default Login;
