//TODO api-fetcer either using reacts own system, or that plugin
//this is a api-fetcher thingie
//make custom hook
import axios from 'axios';

//Add the specific content into the the get etc
//such as names etc
//how the arim works, and or etc
//tiedonhakujuttuja lisää
export default function ApiFetcher(){

    axios.get('https://www.dnd5eapi.co/api/monsters')
    .then(response => {
        console.log(response);
    })

}

