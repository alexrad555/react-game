import Menu from '../Menu';
import NavBar from '../Navbar';
import { useState } from 'react';



const MenuHeader = () => {

    const [isActive,setActive] = useState(false);

    const handleChangeMemu = () => {
        if (isActive === false) {
            return setActive(true)
        }
        else {
            return setActive(false)
        }    
    }
    

    return (
        <>
        <Menu 
            Active={isActive}        
        />
        <NavBar 
            onClickNav={handleChangeMemu}
            Active={isActive} 
        />


        </>
    )

};


export default MenuHeader;