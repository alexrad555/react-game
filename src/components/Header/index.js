import h from './style.module.css';


const Header = ({title,descr}) => {
    return (
    
        <header className={h.root}>
            <div className={h.forest}></div>
            <div className={h.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    
    )
};

export default Header;