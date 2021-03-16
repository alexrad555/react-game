import s from './style.module.css';
import cn from 'classnames';



const NavBar = ( {onClickNav,Active} ) => {
    const handleClick = () => {
        onClickNav && onClickNav()

    };

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                  LOGO
                </p>
               
                <a  
                    onClick={handleClick}
                    className={cn(s.menuButton, {[s.active]: Active})}
                >
                <span  />
                </a>
                
            </div>
        </nav>
    )
}

export default NavBar