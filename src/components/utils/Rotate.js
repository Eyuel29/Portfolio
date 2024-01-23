import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Rotate = (props) => {
    const springs = useSpring({
        to: {
           rotate : 90,
          },
        delay: props.delay
      })
  return (
      <animated.div style={springs}>
        {props.children}
      </animated.div>
  )
}

export default Rotate;