import React, {useRef, useLayoutEffect} from 'react';
import styled from 'styled-components'
import gsap from 'gsap';
import SplitType from 'split-type';


function LandPage(){

    const h1 = useRef()

    useLayoutEffect(() => {
        new SplitType(h1.current)
        gsap.to('.char',{
            y: 40,
            stagger: 0.05,
            //ease: Elastic.easeOut.config(1,0.3)
        })
    })

    return(
        <Content>
            <div>
                <h1 ref={h1}>Controle de Glicemia</h1>
                <p>projeto desenvolvido para controle de glicose e ingestão de insulina para pessoas diabéticas.</p>
                <a href="https://github.com/">github page</a>
            </div>
        </Content>
    )
}

export default LandPage

const Content = styled.div`

    height: 100%;
    background-color: #002A66;
    color: white;

    display: grid;


    & > div:last-child{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin: 0 auto;

        .char{
            transform: translateY(200px);
            transition: all .5s;
        }

        *{
            margin: 20px 0;
        }

        h1{
            overflow: hidden;
            font-size: 60px;
            font-weight: bold;
        }

        p{
            font-size: 20px;
        }

        a{
            padding: 5px;
            border: 2px solid black;
        }

    }
`