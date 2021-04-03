import React from 'react';
import style from 'styled-components'

const Name = style.h2`
  text-align: right;
  font-size: 30px;
  position: absolute;
  top: 1%;
  left: 60%;
  color: #7D1538;
  background: #DACC3E;
  padding: 10px;

  `

const Title = props => {
    return (
        <div>
            <Name> {props.title} </Name>
        </div>
    )
}

export default Title;
