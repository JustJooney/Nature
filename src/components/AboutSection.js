import styled from 'styled-components';
import forest from '../img/forest.jpg';
import {Link} from 'react-router-dom';

function AboutSection(){
	return(
		<StyledAbout >
			<h1>Nature Hike</h1>
			<button><Link to='/gallery'>Gallery</Link></button>
		</StyledAbout>
	)
}

const StyledAbout = styled.div`
	background-image: url(${forest});
	background-repeat: no-repeat;
	background-position: center;
	object-fit: cover;
	min-height: 100vh;
	font-size: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y:hidden;
	h1{
		font-size: 6rem;
		color: white;
	}
	button{
		border-radius: .5rem;
		font-size: 1rem;
		font-weight: bold;
		border: none;
		margin-top: 2rem;
		padding: 1rem;
		cursor: pointer;
		&:hover{
			background: #333;
			a{
				color: white;
			}
		}
		a{
			padding: 1rem;
			text-decoration: none;
			color: #333;
		}
	}
`


export default AboutSection;
