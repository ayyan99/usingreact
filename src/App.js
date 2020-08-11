import React,{Component} from 'react';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'

//for showing the date   
//date.getHours() % 12 to give the date in 12 hour format
//const and let are same as var, for declaring variables

/* first program
function App(){
	const date = new Date();
	const lastname = "Borkakoty";
	return(
		<div>	
		<Header />
		<h1>It is currently about {date.getHours() % 12} o clock</h1>
		<MainContent />
		<Footer />
		</div>

	)
}
*/

/*second program

function App(){
	const date = new Date();
	const hours = date.getHours();
	let timeofday;
	
	if (hours<12){
		timeofday="Morning";
	}
	else if (hours>=12 && hours<18){
		timeofday="Afternoon";
	}
	else if (hours>=18 && hours<22){
		timeofday="Night";
	}
	else {
		timeofday="Night";
	}
	
	//cannot use background-color because it is inside of object, everything within "" because its javascript
	
	const styles = {color:"purple", backgroundColor: "#FFBC00", fontSize: "40px"};


	return(
		<div>	
		<Header />
		<h1>It is currently about {date.getHours() % 12} o clock</h1><br />
		<h1 style={styles}>Good {timeofday}</h1> 
		<MainContent />
		<Footer />
		</div>
	
	)
}

export default App;
*/



//third program
/*can put a date of our choice instead of current date in Date
for example const date = new Date(2019,7,31,15) where 15 is the hour in 24 hour clock format*/

function App(){
	const date = new Date();
	const hours = date.getHours();
	let timeofday;
	const styles = {fontSize: "40px"};
	
	if (hours<12){
		timeofday="Morning";
		styles.color="blue";
	}
	else if (hours>=12 && hours<18){
		timeofday="Afternoon";
		styles.color="yellow";
	}
	else if (hours>=18 && hours<22){
		timeofday="Night";
		styles.color="green";
	}
	else {
		timeofday="Night";
		styles.color="red";
	}
	
	//cannot use background-color because it is inside of object, everything within "" because its javascript

	return(
		<div>	
		<Header />
		<h1>It is currently about {date.getHours() % 12} o clock</h1><br />
		<h1 style={styles}>Good {timeofday}</h1> 
		<MainContent />
		<Footer />
		</div>	
	)
}

export default App;

