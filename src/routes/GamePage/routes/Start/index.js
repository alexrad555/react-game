import { useState, useEffect, useContext ,} from 'react';



import s from "./style.module.css";
import PokemonCard from '../../../../components/PokemonCard';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';
import { useHistory } from 'react-router-dom';


const StartPage = ( ) => {

    const firebase = useContext(FireBaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});
    

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
        });

        return () => firebase.offPokemonSoket();
    }, []);

    const handleChangeSelected = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonsContext.onSelectedPokemons(key, pokemon);
        
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
        
    };

    const handleStartGameClick = () => {
        history.push('/game/board');
    }
   
 
    return (
        <>
            <div className={s.buttonWrap}>
                <button 
                    onClick={handleStartGameClick}
                    disabled={Object.keys(pokemonsContext.pokemons).length < 5}            
                >
                    Start Game
                </button>
            </div>  
           <div className={s.flex}>			
           {
              Object.entries(pokemons).map(([key, {name, img, id, type ,values, selected}]) => 
              <PokemonCard
                className={s.card}  
                isActive={true}
                isSelected={selected}
                onClickCard ={() => {
                    if (Object.keys(pokemonsContext.pokemons).length < 5 || selected ){
                        handleChangeSelected(key);
                    }
                    }}               
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