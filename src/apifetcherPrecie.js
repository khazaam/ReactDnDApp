import axios from 'axios';
//Add the specific content into the the get etc
//such as names etc
//how the arim works, and or etc
//tiedonhakujuttuja lisää
import { useEffect,useState } from 'react';
import ReactDOM from "react-dom/client";
const apiUrli = "https://www.dnd5eapi.co/api/monsters";

let monsterArray = [];
//changes into norma, put filters
const NormalFetch = () => {
    
    const [data, setData] = useState(null);


    useEffect(() => {
      axios
      .get(apiUrli)
      .then(res => {
          const newItem = {
              id: res.data.id,
              name: res.data.name,
          };
          monsterArray.push(newItem)
      })
    }, []);

   console.log(monsterArray, "monster array");
   return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
//still empty

export default NormalFetch;