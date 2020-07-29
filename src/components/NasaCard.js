import React from 'react';




const NasaCard = (props)  => {
    return (
        <div>
            <h2>{props.title}</h2>
                <p>Copyright: {props.copyright} </p> 
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default NasaCard;