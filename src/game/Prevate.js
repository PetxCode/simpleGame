import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const Prevate = ({component: ComponentRoute, ...rest}) => {
  return (
   <Route
    {...rest}
    render={(MyProps) => {
      return(
        {
          currentUser ? <ComponentRoute {...MyProps} /> : <Redirect to="/" />
        }
      )
    }}
   />
  )
}

export default Prevate
