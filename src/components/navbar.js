import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/note' activeStyle>
			Note
		</NavLink>
		<NavLink to='/cal' activeStyle>
			Calculator
		</NavLink>
		<NavLink to='/gallery' activeStyle>
			Gallery
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
        <NavLink to='/resources' activeStyle>
			Resources
		</NavLink>
	
		
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
