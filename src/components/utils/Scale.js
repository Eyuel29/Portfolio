import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Scale = (props) => {

    const springs = useSpring({
        from : { scale : props.initSize },
        to: { scale : 1 },
        delay: props.delay
      })
  return (
      <animated.div style={springs}>
        {props.children}
      </animated.div>
  )
}

export default Scale;