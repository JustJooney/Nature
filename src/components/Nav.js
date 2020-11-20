import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf, faBars} from '@fortawesome/free-solid-svg-icons';

function Nav(){

	function navClickHandler(){
		const doc = document.querySelector('.navbar');
		if(doc.style.display === "flex"){
			doc.style.display = "none";
		} else {
			doc.style.display = "flex";
		}	
	}

	return(
		<NavBar>
			<Title>
				<Link to='/'><FontAwesomeIcon id='leaf' icon={faLeaf} size='2x'/></Link>
				<h1><Link to='/'>Nature</Link></h1>
			</Title>
			<FontAwesomeIcon className='hamburger' icon={faBars} size='2x' onClick={navClickHandler}></FontAwesomeIcon>
			<ul className='navbar'>
				<li>
					<Link to='/activity' >Activity</Link>
				</li>
				<li>
					<Link to='/gallery' >Gallery</Link>
				</li>
				<li>
					<Link to='/contact' >Contact Us</Link>
				</li>
			</ul>
		</NavBar>
	)
}

const NavBar = styled.nav`
	background-color: white;
	position: sticky;
	width: 100%;
	z-index: 10;
	top: 0;
	min-height: 8vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1rem;
	box-shadow: 0 0 10px gray;
	position: relative;
	.hamburger{
		display: none;
	}
	@media(max-width: 600px){
		justify-content: space-between;
		padding: 1rem 2rem;
		.hamburger{
			display: block;
		}
	}
	ul{
		display: flex;
		list-style: none;
		@media(max-width: 768px){
			display: flex;
		}
		@media(max-width: 600px){
			display: none;
			position: absolute;
			z-index: 20;
			background-color: white;
			padding: 1rem 0rem;
			width: 100%;
			left: 0;
			top: 100%;
			min-height: 50%;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			box-shadow: 0 20px 10px lightgray;
		}
	}
	a{
		text-decoration: none;
		color: #333;
	}
	li{
		padding-left: 3rem;
		font-size: 1.3rem;
		@media(max-width: 600px){
			padding: 1rem 0rem;
			margin: 0rem 1rem;
		}
	}
`

const Title = styled.div`
	display: flex;
	align-items: center;
	@media(max-width: 600px){

	}
	h1{
		padding-left: 1rem;
		font-size: 2rem;
	}
	#leaf{
		color: green;
	}
`

export default Nav;