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
                Home To Page
            </button>
        </div>
    );
};

export default GamePage;