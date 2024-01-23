import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SlideX = (props) => {
    const springs = useSpring({
        from: { x: -2000 },
        to: { x:  0 },
        delay: props.delay
      })
  return (
      <animated.div style={springs}>
        {props.children}
      </animated.div>
  )
}

export default SlideX;