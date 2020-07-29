import React, {useState, useEffect} from 'react';


const Image = props => {
    return(
        <img src = {props.url} className = "" alt ='Nasa Daily'/>
    );
}

export default Image;