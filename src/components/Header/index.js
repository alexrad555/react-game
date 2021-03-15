import h from './style.module.css';


const Header = ({title,descr, onClickButton}) => {

    const handleClick = () => {
        console.log('###: <Header />' );
        onClickButton && onClickButton('game');
    }

    return (
    
        <header className={h.root}>
            <div className={h.forest}></div>
            <div className={h.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    
    );
};

export default Header;