import React from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';

import Sidebar from "./Sidebar"
import Header from "./Header"

function Layout(props){

    useLocation()

    function teste(){

        if (window.location.pathname === '/') {
            return(
                <>
                    {props.children}
                </>
            )
        }
        if (window.location.pathname !== '/') {
            console.log('entrei')
            return(
                <ContentChild>
                    <div>
                        <Sidebar>oi</Sidebar>
                    </div>
                    <div>
                        {props.children}
                    </div>
                </ContentChild>
            )
        }
    }

    return(
        <Content>
            <div>
                <Header/>
            </div>
            <div>
                {teste()}
            </div>
        </Content>
    )
}

export default Layout

const Content = styled.div`

    height: 100vh;
    width: 100vw;


    display: grid;
    grid-template-rows: 56px auto;

`

const ContentChild = styled.div`
    display: grid;
    grid-template-columns: 240px auto;
`