import axios from 'axios'

let authService = {
    signup: async function (username, password){
        return new Promise(async (result,reject) => {
            try {
                let response = await axios.post('http://localhost:3001/signup' , {
                    username: username,
                    password: password,
                    role: 'user'
                })
                return result(response)
            } catch (error) {
                return reject(error)
            }
        })
    },

    signin: async function (username, password){
        return new Promise(async (result,reject) => {
            try {
                let response = await axios.post('http://localhost:3001/signin' , {
                    username: username,
                    password: password
                })
                localStorage.setItem('token',response.data)
                return result(response.data)
            } catch (error) {
                return reject(error.response.data)
            }
        })
    },

    getCurrentUser: async function(){
        return new Promise(async (result,reject) => {
            try {
                let response = await axios.get('http://localhost:3001/user',{
                    headers: {
                        "x-access-token": localStorage.getItem('token')
                    }
                })
                return result(response)
            } catch (error) {
                return reject(error)
            }
        })
    }
}
export default authService