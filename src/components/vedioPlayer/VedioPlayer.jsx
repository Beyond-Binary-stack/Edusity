import React, { useRef } from 'react'
import './VedioPlayer.css'
import video from '../../assets/collage-students.mp4'

const VedioPlayer = ({  playState , setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current){
            setPlayState(false)
        }
    }


  return (
    <div className={`vedio-player ${playState ? '' :'hide'}`}  onClick={closePlayer} ref={player}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VedioPlayer