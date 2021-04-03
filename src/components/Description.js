import React from 'react';
import style from 'styled-components'

const StyledCard = style.div`
    width: 30%;
    position: absolute;
    bottom: 12%;
    left: 16px;
    color: #7D1538;
    background: #7FB7BE
  }
   
    `

const Description = props => {
    return (
        <StyledCard>
            <p> {props.description} </p>
        </StyledCard>
    )
}

export default Description;