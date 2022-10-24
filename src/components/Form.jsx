import React, { useState } from 'react';
import styled from "styled-components";
import authService from "../services/service.auth";
import { useNavigate } from "react-router-dom";

function Form(){

    const [path] = useState(window.location.pathname)
    const [title] = useState(handleTitle)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState({
        active: false,
        error: false,
        message: ''
    })

    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };


    async function handleSubmit(e){
        e.preventDefault()

        if (path === '/signup') {
            console.log('entrei')
            try {
                await authService.signup(username,password)
                setMessage({
                    active: true,
                    error: false,
                    message: 'Success signup'
                })
            } catch (error) {
                setMessage({
                    active: true,
                    error: true,
                    message: 'Username already exist'
                })
            }
        }

        if (path === '/signin') {
            try {
                await authService.signin(username,password)
                navigate('/home')
            } catch (error) {
                setMessage({
                    active: true,
                    error: true,
                    message: error
                })
            }
        }

    }

    function handleTitle(){
        let title = path.slice(1).charAt(0).toUpperCase() + path.slice(2,path.length)
        return title
    }

    return(
        <FormParent active={message.active} error={message.error} message={message.message}>
            <h1>{title}</h1>
            <form>
                <label htmlFor='username'>Username</label>
                <input id='username' required placeholder="username" onChange={onChangeUsername} value={username}/>
                <label htmlFor="password">Password</label>
                <input id='password' required placeholder="password" onChange={onChangePassword} value={password} type='password'/>
                <button onClick={handleSubmit}>Send</button>
            </form>
        </FormParent>
    )
}

export default Form

const FormParent = styled.div`

    width: 608px;
    height: 50%;
    background: #ffffff;
    color: black;

    display: grid;
    grid-template-rows: 15% auto;

    border-radius: 5px;
    box-sizing: border-box;

        & > h1{
            margin-top: 20px;
            text-align: center;
            font-size: 60px;
            font-weight: bold;
            color: #002A66;
        }

        & > p{
            font-size: 20px;
        }

        & > a{
            padding: 5px;
            border: 2px solid black;
        }

        & > form{

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            position: relative;
            margin: 0 auto;
            width: 50%;

            label{
                align-self: flex-start;
            }

            input{
                box-sizing: border-box;
                width: 100%;
                padding: 5px;
            }

            button{
                align-self: center;
                width: 40%;
                margin-top: 20px;
                padding: 10px;
                background: transparent;
                border-radius: 5px;
            }

            & > *{
                margin: 5px 0;
            }

        }
        
        /* error message */

        & > form::before{
            content: '${props => props.message}';
            position: absolute;
            box-sizing: border-box;
            background: ${props => props.error ? '#F7E1E3' : '#cff2cd'};

            text-align: center;
            width: 608px;
            padding: 5px;
            border: 1px solid ${props => props.error ? 'red' : 'green'};
            border-bottom: 5px;
            bottom: 0;

            visibility: ${props => props.active ? 'visible' : 'hidden'};

        }

`