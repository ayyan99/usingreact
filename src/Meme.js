import React,{Component} from 'react'
import Header from './MemeComponents/Header.js'
import MemeGenerator from './MemeComponents/MemeGenerator.js'

function Meme(){

	return(
			<div>
				<Header />
				<MemeGenerator />
			</div>
	)
}

export default Meme;