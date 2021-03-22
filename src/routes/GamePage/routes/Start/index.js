import { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';


import s from "./style.module.css";
import PokemonCard from '../../../../components/PokemonCard';
import { FireBaseContext } from '../../../../context/firebaseContext';



const StartPage = ( ) => {

    const firebase = useContext(FireBaseContext);
    const [pokemons, setPokemons] = useState({});
    const history = useHistory();

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
        });
    }, []);

    const handleChangeActive = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc,item) => {
                const pokemon = {...item[1]};
                if(pokemon.id === id ) {
                    pokemon.active = !pokemon.active;   
                };

                acc[item[0]] = pokemon;
                
                firebase.postPokemon(item[0], pokemon)
               

                return acc;
                }, {})
        })
    };

    const handleAddPokemon = () => {
        // const newPokemon = Object.values(pokemons)[0]
        // firebase.addPokemon(newPokemon)
        history.push('/game/board');
    };
 
    return (
        <>
          <button onClick={handleAddPokemon}>
            Start Game
          </button>
           <div className={s.flex}>			
           {
              Object.entries(pokemons).map(([key, {name, img, id, type ,values, active}]) => 
              <PokemonCard  
                isActive={active}
                onClick ={handleChangeActive}               
                id={id}
                key={key}
                name={name}
                img={img}
                type={type}
                values={values}/>
            )}       				
            </div>
        </>
    );
};

export default StartPage;