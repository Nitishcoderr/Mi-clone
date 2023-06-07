import React from 'react'
import VideoCard from './VideoCard'
import '../Style/Video.css'

const Video = ({video}) => {
  return (
    <div className='videos'>
        {
            video.map((item,index)=>(
                <VideoCard name={item.name} key={item.image} image={item.image} index={index} />
            ))
        }
      
    </div>
  )
}

export default Video
