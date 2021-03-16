const GamePage = ( { onGoHomePage} ) => {

    const onClick = ( ) => {
        
        onGoHomePage && onGoHomePage('home');

    }
    return (
        <div>
            <p>
            This is Game Page!!!
            </p>
            <button 
                onClick={onClick}
            >
                HomePage
            </button>
        </div>
    );
};

export default GamePage;