import React, { useState } from "react";

const Cards = () => {

    const [addItem, setAddItem]=useState();

    
    const addOne= async()=>{
        try{
            fetch(`https://www.swapi.tech/api/people`),{
                method: "POST",
                body: JSON.stringify([]),
                headers: {"Content-Type": "application-json"}
            }
            if(!response.ok){
                throw new Error(response.statusText);
            }

            setAddItem()//esto debe modificar los elementos del dropdown en el navbar (.push(navbar.dropdownmenu))???
        }catch(e){
            console.error("something happened", e)
        }
    } 

    return (
        <div>
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex">
                        <button><link to="/about">learn more</link></button>
                        <button>❤</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Cards