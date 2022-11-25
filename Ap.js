import React , {useEffect, useState}from "react"
import SearchBar from "../SearchBar"


const App = () => {

  const [imported,setimported]= useState([])
  
const fetchApi=()=>{
  fetch('https://fakestoreapi.com/https://developers.google.com/books/docs/v1/using#WorkingVolume')
  .then(res=>res.json())
  .then(json=>setimported(json))
  }
     

  
useEffect(()=>{
  fetchApi()},[]
)


    return (
     <div>
    <SearchBar> f</SearchBar>
   {imported.map(item=>{ return <li>{item.title}</li>})}
    </div>
    )
   
  
  }
  
  export default App