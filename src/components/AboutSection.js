import styled from 'styled-components';
import forest from '../img/forest.jpg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeUp} from '../animation';
import {Hide} from '../styles';

function AboutSection(){
	return(
		<StyledAbout >
			<Hide>
				<motion.h1 variants={fadeUp}>Nature</motion.h1>
			</Hide>
			<Hide>
				<motion.button variants={fadeUp}><Link to='/gallery'>Gallery</Link></motion.button>
			</Hide>
		</StyledAbout>
	)
}

const StyledAbout = styled(motion.div)`
	background-image: url(${forest});
	background-repeat: no-repeat;
	background-position: center;
	min-height: 92vh;
	font-size: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media(max-width:768px){


	}
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
