import { Link } from "react-router-dom";

const aboutCharacters = () => {

  const [aboutCharacters, setAboutCharacters]= useState();

  const chatarcerInfo = async()=>{
    try{
      let response = await fetch("https://www.swapi.tech/api/people");
      if(!response.ok){
        throw new Error(response.statusText);
      }

      let characterData = await response.json();
      console.log(characterData);
      setAboutCharacters(characterData.all);
      
      
    }catch(error){
      console.error('An error happened', error)
    }

  }
    
  return (
    <div>Characters</div>
  )
}
  return (
    <div>About</div>
  )
}

export default About