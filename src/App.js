import React from 'react'
import Game from './game/Game'

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient (to bottom right, #0494F0, #292E77)",
        height: "100vh",
        width:"100%",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Game />
    </div>
  )
}

export default App
