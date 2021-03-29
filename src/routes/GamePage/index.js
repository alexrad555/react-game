import { useRouteMatch, Route, Switch} from "react-router-dom";
import { useState } from 'react';

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";

import {PokemonContext} from "../../context/pokemonContext";





const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [player2Pokemons, setPlayer2Pokemons] = useState([]);
    // const [dataPlayer2,setDataPlayer2] = useState({});
  
    const match = useRouteMatch();

    console.log(player2Pokemons, 'player2Pokemons in game page')

    const handleResetContext = () => {
        setSelectedPokemons({})
    }

    // const fetchPlayer2Pokemons = async () => {
    //     const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
    //     const player2Request = await player2Response.json();

    //     return player2Request.data.map(item => ({
    //         ...item,
    //         possession:'red',
    //     }))
    // }

    const handleAddPlayer2Pokemons = (pokemons) => {
        setPlayer2Pokemons(pokemons)
    }

    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if(prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];

                return copyState;
            }
            return {
                ...prevState,
                [key]: pokemon, 
            }
        })
    }

    // console.log(fetchPlayer2Pokemons(), 'fetchPlayer2Pokemons()')
    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            player2Pokemons: player2Pokemons,
            onResetContext: handleResetContext,
            onSelectedPokemons: handleSelectedPokemons,
            onAddPlayer2Pokemons: handleAddPlayer2Pokemons
            // player2Pokemons: fetchPlayer2Pokemons()
            
            // dataPlayer2Pokemons: dataPlayer2,
            // pokemonsPlayer2: changeDataPlayer2

        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;