import React, {cloneElement} from 'react';

// import { Container } from './styles';

export default props => {
  return (
  <div>
    {
    React.Children.map(props.children, (child) =>{
      return cloneElement(child, props)
    })
    }
  </div>
  )
}

