import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';
import {faReddit, faInstagram, faFacebook, faPinterest} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function Footer(){
	return(
		<StyledFooter>
			<h2>Social Media</h2>
			<ul>
				<li><FontAwesomeIcon icon={faReddit} size="3x"/></li>
				<li><FontAwesomeIcon icon={faInstagram} size="3x"/></li>
				<li><FontAwesomeIcon icon={faFacebook} size="3x"/></li>
				<li><FontAwesomeIcon icon={faPinterest} size="3x"/></li>
			</ul>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	min-height: 20vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #333;
	border-top: 2px solid #333;
	h2{
		margin-top: 2rem;
		font-size: 2rem;
	}
	ul{
		display: flex;
		margin-top: 2rem;
		li{
			list-style: none;
			margin: 0rem 1rem;
			cursor: pointer;
			color: #333;
		}
	}
`

export default Footer;