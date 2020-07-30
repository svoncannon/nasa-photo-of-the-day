
import React from 'react'; 
import style from 'styled-components'

const Title = style.h3`
  text-align: center;
  font-size: 55px;
  background: -webkit-linear-gradient(yellow, green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`;

const Description = props => {
    return (
        <div>
            <div>
               <Title>Planet Fun Facts!</Title> 
            </div>
        </div>
    )
}


export default Description

