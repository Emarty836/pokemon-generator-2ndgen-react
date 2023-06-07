import React, {useState, useEffect, useLayoutEffect} from 'react';
import './App.css';

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
  dark: "#736c75",
  steel: "#89a1b0",
};

const url = "https://pokeapi.co/api/v2/pokemon/";
let id = (Math.floor(Math.random() * 100) + 1)+150;

function App() {
  
  const [name, setName] = useState("");
  const [pokeID, setPokeID] = useState(id);
  const [image, setImage] = useState('');
  const [hp, setHp] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');
  const [speed, setSpeed] = useState('');
  const [specialAttack, setSpecialAttack] = useState('');
  const [specialDefense, setSpecialDefense] = useState('');
  const [type, setType] = useState('');
  const themeColor = typeColor[type];


  fetch(url + pokeID)
  .then((response) => response.json())
  .then((data) => {
      setName(data.name[0].toUpperCase() + data.name.slice(1));
      setImage(data.sprites.other.dream_world.front_default);
        setHp(data.stats[0].base_stat);
        setAttack(data.stats[1].base_stat);
        setDefense(data.stats[2].base_stat);
        setSpeed(data.stats[5].base_stat);
        setSpecialAttack(data.stats[3].base_stat);
        setSpecialDefense(data.stats[4].base_stat);
        setType(data.types[0].type.name); 
        
        console.log(data.types[0].type.name);
        let type2 = data.types[1].type.name;
        if (type2 == undefined){
          console.log('undefined')
        }
        else{
          console.log('it had a type 2')
        }
  });



  let getPokeData = () => {
    {/*console.log('before change');
    console.log(pokeID);
  console.log(name);*/}
    let id = (Math.floor(Math.random() * 100) + 1)+150;
    setPokeID(id);
    const finalUrl = url + id;
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
        console.log(data.name[0].toUpperCase() + data.name.slice(1));
        {/*console.log('after ID change')*/}
        console.log(id);
        setName(data.name[0].toUpperCase() + data.name.slice(1));
        setImage(data.sprites.other.dream_world.front_default);
        setHp(data.stats[0].base_stat);
        setAttack(data.stats[1].base_stat);
        setDefense(data.stats[2].base_stat);
        setSpeed(data.stats[5].base_stat);
        setSpecialAttack(data.stats[3].base_stat);
        setSpecialDefense(data.stats[4].base_stat);
        setType(data.types[0].type.name); 
        console.log(data.types[0].type.name, data.types[1].type.name);
    }, []);
}




  return (
    <div className="App">
      <div className='container'>
        <div id='card' style={{background:`radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`}}>
            <p className="hp">
              <span>HP </span>{hp}
            </p>
            <img src={image} />
            <h2 className="poke-name">{name}</h2>
            <div className="types">
         
            </div>
        <div className="stats">
          <div>
            <h3>{attack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>{defense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>{speed}</h3>
            <p>Speed</p>
          </div>
          
          <div>
            <h3>{specialAttack}</h3>
            <p>S. Attack</p>
          </div>
          <div>
            <h3>{specialDefense}</h3>
            <p>S. Defense</p>
          </div>
        </div>
        </div>

        <button id='btn' onClick={() => {(getPokeData())}}>Generate</button>
      </div>
    </div>
  );
}



export default App;
