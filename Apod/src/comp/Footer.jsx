import React from 'react'

export default function Footer(props) {
    const {showModal,handleDisplay,data}=props
  return (
    <footer>
        <div className="bgGradient">
        <div>
       <h2>{data?.title}</h2> 
       <h1>APOD Project</h1>
       <button onClick={handleDisplay}><i className="fa-solid fa-circle-info"></i></button>
       </div>
       </div>
    </footer>
  )
}
