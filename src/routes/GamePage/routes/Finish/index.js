import { useContext ,useEffect, useState} from 'react';
import PlayerBoard from "../../routes/Board/component/PlayerBoard";
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard/index";
import { FireBaseContext } from '../../../../context/firebaseContext';
import s from "./style.module.css"
import { useHistory} from 'react-router-dom';


const FinishPage = () => {

    const history = useHistory();
    const firebase = useContext(FireBaseContext);
    const [selected,setSelected] = useState(false);
    const {pokemons, player2Pokemons, onResetContext}= useContext(PokemonContext);
    const arrData = useContext(PokemonContext);
    const arr = arrData.dataPlayer2Pokemons;

    if (player2Pokemons.length === 0) {
        history.replace('/game');
    }

    const handleCardClick = (item) => {
        setSelected(item);
    }

    const addPokemon = (pokemon) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(pokemon);
     
    }

   
    const goToStartPage = () => {
        
        firebase.addPokemon(selected)
        onResetContext()
        history.push('/game');
    };

   console.log('pokemons',pokemons)
   console.log('player2Pokemons',player2Pokemons)
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.row}>
                    {Object.values(pokemons).map((item) => (
                    <PokemonCard
                        isActive={true} 
                        id={item.id}
                        name={item.name}
                        minimize
                        img={item.img}
                        type={item.type}
                        values={item.values}/>
                    ))}    
                </div>
                <div className={s.row}>
                    <button disabled={!selected} onClick={goToStartPage}>
                        END GAME
                    </button >
                </div>
                <div className={s.row}>
                {player2Pokemons.map((item) => (
                <PokemonCard
                    isActive={true} 
                    isSelected={selected.id === item.id} 
                    id={item.id}
                    name={item.name}
                    minimize
                    img={item.img}
                    type={item.type}
                    onClickCard={() => handleCardClick(item)}
                    values={item.values}/>
                ))} 
                </div>
            </div>




           
           
            
        </>
    )
}


export default FinishPage;