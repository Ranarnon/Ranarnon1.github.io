import React, { useState } from "react"
import "./components/SearchBar.css"




const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const handleClick = (event) => {
        setSearchValue(event.target.value)

    }



    const searchBtn = searchValue.length > 2

   

    return <div>
        <input type="text" value={searchValue} placeholder="search..." onChange={handleClick}
        />
   
        {searchBtn && <button onClick={handleClick}>search</button>}

    </div>
}


export default SearchBar
