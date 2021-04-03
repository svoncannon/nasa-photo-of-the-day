import React from 'react'
import style from 'styled-components'

const NasaImage = style.div`
display: flex;
    justify-content: center;
    margin-top: 3%;
    margin-bottom: 3%;
    img {
        height: 85vh;
    }
    `


function Photo(props) {
    const { image } = props

    return (
        <NasaImage>
            <img src={image} alt="#" />
               
        </NasaImage>
    )
}

export default Photo