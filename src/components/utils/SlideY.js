import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SlideY = (props) => {

    const springs = useSpring({
        from : {
          y : props.y1 || 30, 
          opacity : props.opacity1 || 0 
        },
        to : {
          y : props.y2 || 0,
          opacity : props.opacity2 || 1
        },
        delay : props.delay || 300,
    })

  return (
      <animated.div style={springs}>
        {props.children}  
      </animated.div>
  )
}

export default SlideY;