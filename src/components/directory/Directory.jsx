import React from 'react'


import DirectoryItem from '../directory-item/DirectoryItem';
import './Directory.scss';

 const Directory = ({categories}) => {
  return (
    <div className="directory-container">
    {categories.map((category)=>{
   
   return(
    <DirectoryItem key={category.id} category={category}/>
    )
    })}
      
  </div>
  )
}

export default Directory;