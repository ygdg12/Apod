import React from 'react'

export default function Sidebar(props) {
    const {handleDisplay,data}=props
  return (
     <div className="sidebar">
    <div className="bgOverlay" onClick={handleDisplay}></div>
     <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
            <p className="descriptionTitle">{data?.date}</p>
            <p>{data?.explanation}</p>
        </div>
<button onClick={handleDisplay}><i className="fa-solid fa-right-long"></i></button>
    </div>
    </div>
  )
}
