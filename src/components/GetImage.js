import React from 'react';
import Photo from './Photo'
import Video from './Video'

 const Image = (props) => {
    {props.media_type === `image` ? 
        return (<Photo
            image={props.url}/>)
            
    :  return (<Video url={props.url} />)
    }
}
export default Image