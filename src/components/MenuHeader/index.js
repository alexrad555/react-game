import Menu from '../Menu';
import NavBar from '../Navbar';
import { useState } from 'react';

const MenuHeader = ({ bgActive }) => {
    const [isOpen, setOpen] = useState(false);

    const handleClickHamburg = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <>
            <Menu 
                isOpen={isOpen}
                onClickHamburg={handleClickHamburg}
            />
            <NavBar 
                isOpen={isOpen}
                bgActive={bgActive}
                onClickHamburg={handleClickHamburg}
                
            />
        </>
    )

};


export default MenuHeader;