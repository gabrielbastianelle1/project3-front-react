import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const HeaderOptions = [
    {
        text: 'Sign up',
        route: '/signup',
        pathname: '/'
    },
    {
        text: 'Sign in',
        route: '/signin',
        pathname: '/'
    },
    {
        text: 'Back',
        route: '/',
        pathname: '/signup'
    },
    {
        text: 'Back',
        route: '/',
        pathname: '/signin'
    }
]

function Header(){

    useNavigate()
    return(
        <Content>             
            <div>Gabriel e Mavi</div>
            <div>
                {
                    HeaderOptions.map((value) => {
                        if (window.location.pathname === value.pathname) {
                            return(
                                <Link to={value.route}>{value.text}</Link>
                            )
                        }
                        return null
                    })
                }
            </div>
        </Content>
    )
}

export default Header

const Content = styled.div`

    background: #DDDDDD;
    width: 100%;
    height: 56px;
    color: black;
    font-weight: bold;
    padding: 0 50px;
    box-sizing: border-box;

    z-index: 1;
    position: relative;

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;

    a::before{
        content: '';
        position: absolute;
        z-index: 1;
        left: -25px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transform: translateY(50%);
        bottom: 50%;
        background: #002A66;
    }

    & > div:last-child{
        display: flex;
        justify-content: end;
    }

    & > div:last-child a{
        margin: 0 60px;
    }
`