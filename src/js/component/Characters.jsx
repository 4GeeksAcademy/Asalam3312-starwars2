import React, { useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {

  const [Characters, setCharacters]= useState();

  const chatarcerInfo = async()=>{
    try{
      let response = await fetch("https://www.swapi.tech/api/people");
      if(!response.ok){
        throw new Error(response.statusText);
      }

      let characterData = await response.json();
      console.log(characterData);
      setCharacters([characterData.name, characterData.gender, characterData.hair_color, characterData.eye_color]);
      
      
    }catch(error){
      console.error('An error happened', error)
    }

  }
    
  return (
    <div>Characters</div>
  )
}

export default Characters