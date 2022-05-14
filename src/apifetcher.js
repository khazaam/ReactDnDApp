/* eslint-disable react-hooks/exhaustive-deps */
//TODO api-fetcer either using reacts own system, or that plugin
//this is a api-fetcher thingie
//make custom hook
import axios from 'axios';
import { useEffect, useState } from 'react';


//Add the specific content into the the get etc
//such as names etc
//how the arim works, and or etc
//tiedonhakujuttuja lisää

const ApiFetcher = () => {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
   
useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.randomuser.me/?results=5`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>API </h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name }) => (
            <li key={id}>
              <h3>{name}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ApiFetcher;