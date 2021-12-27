import React, {cloneElement} from 'react';

// import { Container } from './styles';

export default props => {
  return (
  <div>
    {cloneElement(props.children)}
  </div>
  )
}

