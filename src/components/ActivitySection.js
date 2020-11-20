import styled from 'styled-components';
import hiking1 from '../img/hiking1.jpg';
import camping1 from '../img/camping1.jpg';
import birdwatching1 from '../img/birdwatching1.jpg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeUp, pageAnimation} from '../animation';
import {Hide} from '../styles';


function ActivitySection(){
	return(
		<motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
			<Hide>
			<StyledH1 variants={fadeUp}>Activities</StyledH1>
			</Hide>
			<Activity>
				<motion.section className='hiking' variants={fadeUp}>
					<Link to='/activity/hiking'>
						<h2>Hiking</h2>
					</Link>
				</motion.section>
				<motion.section className='camping' variants={fadeUp}>
					<Link to='/activity/camping'>
					<h2>Camping</h2>
					</Link>
				</motion.section>

				<motion.section className='birdwatching' variants={fadeUp}>
					<Link to='/activity/birdwatching'>
						<h2>Bird Watching</h2>
					</Link>
				</motion.section>

			</Activity>
		</motion.div>
	)
}


const StyledH1 = styled(motion.h1)`
	text-align: center;
	color: #333;
	margin-top: 2rem;
	padding: 2rem;
	font-size: 3.5rem;
`

const Activity = styled(motion.div)`
	min-height: 40vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	margin: 2rem;
	overflow: hidden;
	section{
		margin: 3rem 0rem;
		overflow: hidden;
		color: #333;
		height: 25rem;
		width: 25rem;
		box-shadow: 0 10px 20px gray;
		text-align: center;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		filter: grayscale(100%);
		transition: 200ms;
		@media (max-width: 768px){
			text-align: center;
			width: 100%;
			filter:grayscale(0);
		}
		&:hover{
			filter: grayscale(0);
			h2{
				font-size: 6rem;
			}
		}
		a{
			text-decoration: none;
			color: white;
		}
		h2{
			text-shadow: 3px 3px 0 black;
			margin: 1rem 2rem;
			font-size: 5rem;
			font-family: 'Roboto', sans-serif;
			transition: 200ms;
			padding: 5rem;
		}
	}
	.hiking{
		background-image: url(${hiking1});

	}
	.camping{
		background-image: url(${camping1});
	}
	.birdwatching{
		background-image: url(${birdwatching1});
	}
`

export default ActivitySection;
