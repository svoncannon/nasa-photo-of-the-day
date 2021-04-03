import React from 'react';
import style from 'styled-components'

const Day = style.h3`
color: #7D1538;
background: #7FB7BE;
  text-align: right;
  font-size: 30px;
  position: absolute;
  top: 8%;
  left: 70%;
  padding: 10px;
`;
const DateBox = props => {
    return (
        <div>
            <Day> {props.date} </Day>
        </div>
    )
}

export default DateBox;