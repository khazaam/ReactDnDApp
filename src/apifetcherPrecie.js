import axios from 'axios';
//Add the specific content into the the get etc
//such as names etc
//how the arim works, and or etc
//tiedonhakujuttuja lisää

const apiUrli = "https://www.dnd5eapi.co/api/monsters";

//changes into norma, put filters
function NormalFetch(){

    // old quick
    
    axios.get(apiUrli)
    .then(response => {

        console.log(response, "eka");

    })
    

}

export default NormalFetch;