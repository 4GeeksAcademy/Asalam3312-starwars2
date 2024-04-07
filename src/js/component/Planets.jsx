import React, { useState } from "react";
import { Link } from "react-router-dom";

const Planets = () => {

    const [planets, setPlanets]=useState();

    const planetsInfo = async()=>{
        try{
            let response = await fetch('https://www.swapi.tech/api/planets');
        if(!response.ok){
            throw new Error(response.statusText)
        }
        
        let planetData = await response.json()
        console.log(planetData)
        setPlanets([planetData.name, planetData.population, planetData.terrain])
        }
        catch(error){
            console.error("An error happened",error)
        }
    }
  return (
    <div>Planets</div>
  )
}

export default Planets