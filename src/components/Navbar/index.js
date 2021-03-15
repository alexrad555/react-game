import s from './style.module.css';



const NavBar = () => {

    return (
        <nav class={s.root}>
            <div class={s.navWrapper}>
                <p class={s.brand}>
                  LOGO
                </p>
                <a class="menuButton active">
                <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar