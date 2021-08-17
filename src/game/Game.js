import React, {useState, useEffect} from 'react'
import img1 from "./assets/1.png"
import img2 from "./assets/2.png"
import img3 from "./assets/3.png"
import img4 from "./assets/4.png"
import img5 from "./assets/5.png"
import img from "./assets/0.png"

const Game = () => {
  const[result, setResult] = useState(0)
  const[me, setMe] = useState(0)
  const[computer, setComputer] = useState(0)
  const[timer, setTimer] = useState(0)
  const[show, setShow] = useState(0)

const compValue = (a, b) => {
  setComputer(Math.floor(Math.random() * (b - a + 1) + a))
}

useEffect(() => {
  setInterval(() => {
    setTimer(el => el + 1)
  }, 1000)
  // compValue(1,3)
}, [])

useEffect(() => {
  setInterval(() => {
    setShow(el => el + 1)
    compValue(0,5)
  }, 5000)
}, [])

  return (
    <div
    style={{
         height: "100vh",
        width:"100%",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        color: "white",
        fontSize:"40px",
        alignItems:"center",
        backgroundColor: "green" ,
        backgroundImage: "linear-gradient ( #0494F0, #292E77)",
        
    }}
    >
      <div>Rock, paper, scissors!</div>
      <div>No rounds yet!</div>
      <div
      style={{
        display:"flex",
        justifyContent: "space-between",
        width:"900px",
        marginTop: "70px",
        alignItems:"center"
      }}
      >
        <div
        style={{
          width:"350px",
          height: "350px",
          display: "flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          margin: "20px"
        }}
        >
          <div
          style={{
            width:"350px",
            height: "300px",
            borderRadius: "10px",
            backgroundColor: "white",
            color:"gray",
            justifyContent:"center",
            display: "flex",
            alignItems:"center"
          }}
          >
            <div
            style={{
              display: "flex",
              fontSize:"15px",
              width: "320px",
              justifyContent:"space-around"
            }}
            >
              <div
              style={{
                cursor:"pointer",
                width:"40px",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent:"center",
                alignItems:"center"
              }}
             
              onClick={() => {
                setMe(1)
              }}
              >
                <img 
                src={img1}
                style={{
                  width:"35px",
                  height:"35px",
                  objectFit:"cover"
                }}
                />
              </div>
              <div
               style={{
                cursor:"pointer",
                width:"40px",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent:"center",
                alignItems:"center"
              }}
              onClick={() => {
                setMe(2)
              }}
              > <img 
              src={img2}
              style={{
                width:"35px",
                height:"35px",
                objectFit:"cover"
              }}
              /></div>
              <div
               style={{
                cursor:"pointer",
                width:"40px",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent:"center",
                alignItems:"center"
              }}
              onClick={() => {
                setMe(3)
              }}
              >
                 <img 
                src={img3}
                style={{
                  width:"35px",
                  height:"35px",
                  objectFit:"cover"
                }}
                />
              </div>
              <div
               style={{
                cursor:"pointer",
                width:"40px",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent:"center",
                alignItems:"center"
              }}
              onClick={() => {
                setMe(4)
              }}
              >
                 <img 
                src={img4}
                style={{
                  width:"35px",
                  height:"35px",
                  objectFit:"cover"
                }}
                />
              </div>
              <div
               style={{
                cursor:"pointer",
                width:"40px",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent:"center",
                alignItems:"center"
              }}
              onClick={() => {
                setMe(5)
              }}
              >
                 <img 
                src={img5}
                style={{
                  width:"35px",
                  height:"35px",
                  objectFit:"cover"
                }}
                />
              </div>
              <div
               style={{
                cursor:"pointer",
                width:"40px",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent:"center",
                alignItems:"center"
              }}
              onClick={() => {
                setMe(0)
              }}
              >
                 <img 
                src={img}
                style={{
                  width:"35px",
                  height:"35px",
                  objectFit:"cover"
                }}
                />
              </div>
            </div>
         
          </div>
          <div>me</div>
        </div>
       
        <div>vs</div>
        <div
        style={{
          width:"350px",
          height: "350px",
          display: "flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          margin: "20px"
        }}
        >
          <div
          style={{
            width:"350px",
            height: "300px",
            borderRadius: "10px",
            backgroundColor: "white",
            color:"gray",
            justifyContent:"center",
            display: "flex",
            alignItems:"center"
          }}
          >
         <div
               style={{
                cursor:"pointer",
                width:"50px",
                height: "50px",
                borderRadius: "25px",
                backgroundColor: "lightgray",
                display: "flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"12px"
              }}
              // onClick={() => {
              //   window.location.reload()
              // }}
              onClick={() => {
                compValue(0, 5)
              }}
              >reset</div>
           
          </div>
          <div>Computer</div>
        </div>
       
      </div>
    
    <div>
      {
        me === computer ? <div> You are Right!!! </div> : <div> Sorry, You are Wrong!!!</div>
      }
    </div>
    {/* <div>COMP: {computer}</div>
    <div>ME: {me}</div> */}
    <div>{timer%5}</div>
    </div>
  )
}

export default Game
