import React,{Component} from 'react'

import logo from './Images/logo.jpg'

function Header(){
	return(
		<header>
		<img src={logo} alt="problem" />
		<p>Meme Generator</p>
		</header>
	)
}

export default Header;