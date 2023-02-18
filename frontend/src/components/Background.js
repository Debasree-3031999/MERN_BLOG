import React from 'react'
import background from "./background.mp4"


export default function Background() {
  return (
    <div>
        <video className='videoTag' autoPlay loop muted>
    <source src={background} type='video/mp4' />
</video>
    </div>
  )
}
