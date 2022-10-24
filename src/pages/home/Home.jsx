import React, {useState,useEffect} from "react"
import authService from '../../services/service.auth'


function Home(){
    const [user,setUser] = useState({})

    useEffect(() => {
        async function getCurrentUser(){
            try {
                let response = await authService.getCurrentUser()
                setUser(response.data.user)
            } catch (error) {
                console.log(error)
            }
        }
        getCurrentUser()
    },[])

    return(
        <div>{user.username}</div>
    )
}

export default Home

