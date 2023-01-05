import Api from './Api'


class Auth {
    
    static async Register(data) {
        const register = await Api.post('/register',data);
        return register;
    }

    static async Login(data) {
        const login = await Api.post('/login',data);
        return login;
    }

    static async getUser(){
        const user = await Api.get('/user');
        return user;
    }

    static async Logout(){
        const response = await Api.delete('/logout');
        return response;
    }
}

export default Auth