import React, { useEffect, useState } from 'react';
import { Character } from './Character/Character';
import { Button } from './Button/Button';
/*import { characterList } from './CharacterList';*/


export function Characters() { 

 const [characters, setCharacters] = useState([]);
 const [info, setInfo] = useState([]);
 const url = "https://rickandmortyapi.com/api/character"

 const fetchApi = async (url) => {
  const res = await fetch(url);
  const characterJSON = await res.json();
  const {results, info} = await characterJSON
  setCharacters(results)
  setInfo(info)
  console.log(results)
 }

 const onNext = () =>{
   fetchApi(info.next);
 }

 const onPrev = () =>{
  fetchApi(info.prev);
}

const onMale =() =>{
  fetchApi("https://rickandmortyapi.com/api/character/?gender=male")
}

const onFemale =() =>{
  fetchApi("https://rickandmortyapi.com/api/character/?gender=female")
}

const onGenderless = () => {
  fetchApi("https://rickandmortyapi.com/api/character/?gender=genderless");
};
const onUnknown = () => {
  fetchApi("https://rickandmortyapi.com/api/character/?gender=unknown");
};

const onAll = () =>{
  fetchApi(url)
}


 useEffect( () =>{
  fetchApi(url)
 }, [])

  return( <div className='container_cards'> 

    <div className='buttonGeneral'>
    <Button name='prev' onChange={onPrev} page={info.prev}/>
    <Button name='next' onChange={onNext} page={info.next}/>

    <Button name='All' onChange={onAll} page={true}/>
    </div>  
    
    <div className='buttonGenero'>
    <Button name='Male' onChange={onMale} page={true}/>
    <Button name='Female' onChange={onFemale} page={true}/>
    <Button name='Gender' onChange={onGenderless} page={true}/>
    <Button name='Unknown' onChange={onUnknown} page={true}/>
    </div>
    
    {characters.map(
    (character) => ( 
      <Character 
        key={character.id} 
        name={character.name} 
        avatar={character.image} 
        status={character.status} 
        species={character.species} 
        gender={character.gender} 
        origin={character.origin.name} /> )
        )} 
        </div> ); } 
