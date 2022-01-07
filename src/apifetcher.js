//TODO api-fetcer either using reacts own system, or that plugin
//this is a api-fetcher thingie
import axios from 'axios';

export default function ApiFetcher(){

    axios.get('https://www.dnd5eapi.co/api/monsters')
    .then(response => {
        console.log(response);
    })

}

