import React, { useEffect, useState } from 'react';
import Main from './comp/Main';
import Sidebar from './comp/Sidebar';
import Footer from './comp/Footer';

function App() {
  const[showModal,setShowModal]=useState(false)
  const[data,setData]=useState(null)
 const [loading,setLoading]=useState(false)

  function handleDisplay(){
    setShowModal(!showModal);
  }
 useEffect(()=>{
  async function fetchApi() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
    
    const today = (new Date()).toDateString()
    const localKey = `NASA-${today}`
    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey))
      setData(apiData)
      console.log('Fetched from cache today')
      return
    }
    localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch(err){
      console.log(err.message)
    }
   }
   fetchApi()
 },[])

  return (
    <>
    { data ? (<Main data={data}/>):(
      <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
     {showModal &&(< Sidebar data={data} handleDisplay={handleDisplay}/>)} 
      {data &&  ( <Footer data={data}  handleDisplay={handleDisplay}/> )}
    </>
  );
}

export default App;
