import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';

function Nav(){
	const {pathname} = useLocation();

	return(
		<NavBar>
			<Title>
				<Link to='/'><FontAwesomeIcon id='leaf' icon={faLeaf} size='2x'/></Link>
				<h1><Link to='/'>Nature</Link></h1>
			</Title>
			<ul>
				<li>
					<Link to='/activity'>Activity</Link>
				</li>
				<li>
					<Link to='/gallery'>Gallery</Link>
				</li>
				<li>
					<Link to='/contact'>Contact Us</Link>
				</li>
			</ul>
		</NavBar>
	)
}

const NavBar = styled.nav`
	background-color: white;
	position: sticky;
	width: 100%;
	top: 0;
	min-height: 8vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1rem;
	box-shadow: 0 0 10px gray;
	ul{
		display: flex;
		list-style: none;
	}
	a{
		text-decoration: none;
		color: #333;
	}
	li{
		padding-left: 3rem;
		font-size: 1.3rem;
	}
`

const Title = styled.div`
	display: flex;
	align-items: center;
	h1{
		padding-left: 1rem;
		font-size: 2rem;
	}
	#leaf{
		color: green;
	}
`

export default Nav;