import './search-box.style.css'

import React from 'react'

const searchBox = ({className,placeholder,onChangeHandler}) => {
  return(
    <input 
     className={className}
     type='search'
     placeholder={placeholder} 
     onChange={onChangeHandler}
    /> 
  )  
}

export default searchBox;