import React from 'react';
import style from 'styled-components'; 

const StyledImage = style.div`
    display: flex;
    justify-content: center;
    margin-top: 3%;
    margin-bottom: 3%;
    img {
        height: 80vh;
    }
`

const Image = props => {
    return (
                <StyledImage><img 
                src={props.url}
                className=""
                alt="Nasa Daily"
                /></StyledImage>
    );
}


export default Image;