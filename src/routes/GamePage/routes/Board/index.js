import s from './style.module.css';
import PokemonCard from "../../../../components/PokemonCard";
import {PokemonContext} from "../../../../context/pokemonContext";
import { useContext ,} from 'react';

const BoardPage = () => {
    const { pokemons } = useContext(PokemonContext);
    console.log("pokemonContext",pokemons);
    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                            {
                                Object.values(pokemons).map(({key,name, img, id, type, values}) => (
                                    <PokemonCard
                                        className={s.card}  
                                        isActive
                                        key={id}
                                        key={key}
                                        name={name}
                                        img={img}
                                        type={type}
                                        values={values}
                                        minimize
                                        
                                    />
                                ))
                            }

						</div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;