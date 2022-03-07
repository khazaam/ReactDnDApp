//TODO api-fetcer either using reacts own system, or that plugin
//this is a api-fetcher thingie
//make custom hook
import axios from 'axios';
import { useEffect, useState } from 'react';


//Add the specific content into the the get etc
//such as names etc
//how the arim works, and or etc
//tiedonhakujuttuja lisää

const apiUrli = "https://www.dnd5eapi.co/api/monsters";





export default function ApiFetcher(){

    const[apiData, setApiData] = useState({});

    // old quick
    axios.get(apiUrli)
    .then(response => {

        console.log(response);

    })
    //

    useEffect(() => {

    })

}
