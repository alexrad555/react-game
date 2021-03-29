import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css";
import cn from 'classnames';
import {useState} from "react";

const PlayerBoard = ({player,cards, onClickCard}) => {
    const [isSelected,setSelected] = useState(null);
    return (
        <>
            {
                cards.map((item) => (
                    <div 
                        className={cn(s.cardBoard, {
                            [s.selected]: isSelected === item.id
                    })}
                        onClick= { () => {
                            setSelected(item.id);
                            onClickCard && onClickCard({
                                player,
                                ...item,

                            });
                        
                        }}
                    >
                        <PokemonCard
                            id={item.id}
                            isActive
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                            minimize
                        
                    />
                    </div>
                ))
    }
        </>
    );
};

export default PlayerBoard;

