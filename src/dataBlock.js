import { useState, useEffect } from "react";

const monSTers = [
  {
    
  id: Number,
  name: " ",
  size: " ",

  },

];

//sort data next
function Home() {
  const [monSTers, setMonsters] = useState([]);
  const [sortType, setSortType] = useState('Hirviot');  

  useEffect(() => {
    const sortArray = type => {
           const types = {
             name: 'name',
             size: 'size',
             hitpoints: 'hit_points',
           };
           const sortProperty = types[type];
           const sorted = [...monSTers].sort((a, b) => b[sortProperty] - a[sortProperty]);
           setMonsters(sorted);
         };
         sortArray(sortType);
       }, [sortType]);

  useEffect(() => {
    const FetchMonsters = async () => {
    const response = await fetch("https://raw.githubusercontent.com/khazaam/ddmonsterijuttu/master/d%26d5e%20monsterijuttu/src/assets/hirviot.json");
    const MonsterData = await response.json();
    setMonsters(MonsterData);
    };
    FetchMonsters();
  }, [monSTers]);


  const UseMonsters = monSTers.map((monster)=>{
    return      <div>
                <h3>{monster.id}</h3>
                <h2>{monster.name}</h2>
                <p>{monster.size}</p>
                </div>
  })

  return (
    <>
    <h1>
      Data from api
    </h1>
    <select id="selectbox" onChange={(e) => setSortType(e.target.value)}> 
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="size">size</option>
        </select>
    <div className="container">
      {monSTers && UseMonsters}
    </div>
    </>
  );
  
/*
useEffect(() => {
 const sortArray = type => {
        const types = {
          name: 'name',
          size: 'size',
          hitpoints: 'hit_points',
        };
        const sortProperty = types[type];
        const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
      };
      sortArray(sortType);
    }, [sortType]);
})
   

      //.then(())

*/
/*
  return (
    <div className="Home">
        <select id="selectbox" onChange={(e) => setSortType(e.target.value)}> 
            <option value="name">name</option>
            <option value="size">size</option>
            <option value="hit_points">hitpoints</option>
        </select>
        {data.map(item => (
            <div key={item.id} style={{ margin: '5px' }}>
                <div id="monsterit">{`Name: ${item.name}`}</div>
                <div id="monsterit">{`Size: ${item.size}`}</div>
                <div id="monsterit">{`hit_points: ${item.hit_points}`}</div>
            </div>
        ))}
    </div>
  );
}
*/
}

export default Home;
