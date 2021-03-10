import h from './style.module.css';


const Header = () => {
    return (
    
        <header className={h.root}>
            <div className={h.forest}></div>
            <div className={h.container}>
                <h1>This is title</h1>
                <p>This is Description!</p>
            </div>
        </header>
    
    )
};

export default Header;