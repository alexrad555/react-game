import Menu from '../Menu';
import NavBar from '../Navbar';
import { useState } from 'react';

const MenuHeader = () => {
    const [isActive, setActive] = useState(false);

    const handleChangeMenu = () => setActive(!isActive)

    return (
        <>
            <Menu 
                isActive={isActive}
            />
            <NavBar 
                onClick={handleChangeMenu}
                isActive={isActive}
            />
        </>
    )

};


export default MenuHeader;