import Footer from '../components/Footer';
import styled from 'styled-components';
import camping2 from '../img/camping2.jpg';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

function Contact(){
	return(	
		<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<StyledContact>
				<form>
					<h2>Contact Us</h2>
					<label>Name: </label>
					<input type='text' placeholder='John Doe'></input>					
					<label>Email: </label>					
					<input type='email' placeholder='JohnDoe@email.com'></input>					
					<label>Phone: </label>					
					<input type='tel' placeholder='&#40;555&#41;-555-5555'></input>
					<label>Message: </label>					
					<textarea></textarea>
					<button>Submit</button>
				</form>
			</StyledContact>
		</motion.div>
	)
}

const StyledContact = styled.div`
	min-height: 92vh;
	background-image: url(${camping2});
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;

	form{
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		margin-right: 5%;
		width: 30rem;
		height: 45rem;
		background: white;
		h2{
			margin:1.3rem auto;
		}
		label{	
			font-size: 1.3rem;
			margin-left: 3rem;
		}
		input{
			font-family: 'Roboto', sans-serif;
			font-size: 1.3rem;
			margin-left: 3rem;
			width: 80%;
			padding: 1rem;
		}
		textarea{
			margin-left: 3rem;
			font-size: 1.4rem;
			padding: 0.5rem;
			resize: none;
			width: 80%;
			height: 10rem;
		}
		button{
			margin-left: 3rem;
			padding: 1rem;
			border: none;
			margin-bottom: 1rem;
			background-color: #45a049;
			width: 80%;
			font-size: 1.3rem;
			color: white;
		}

	}
`

export default Contact;