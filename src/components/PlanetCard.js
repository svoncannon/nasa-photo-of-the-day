import React from 'react'; 
import style from 'styled-components'; 


const StyledPlanetCard = style.div`
    display: flex;
    flex-direction: column;
    border: 1px solid orange;
    width: 20%;
    background: -webkit-linear-gradient(#DCC9B6, #ABC4AB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 1.2rem
   
    
    
   
`


const PlanetCard = (props) => {

    return (
        <StyledPlanetCard className='planetCard'>
            <h3>Planet Name: {props.name}</h3>
            <h4>English Name: {props.englishName}</h4>
            <div>
                <p>Moons: {props.moons}</p>
                <p>Discovered: {props.date}</p>
                <p>Discovered By: {props.person}</p>
                
            </div>
        </StyledPlanetCard>
    )
}

export default PlanetCard; 