import styled from 'styled-components';
import birdwatching2 from '../img/birdwatching2.jpg';
import birdwatching3 from '../img/birdwatching3.jpg';
import birdwatching4 from '../img/birdwatching4.jpg';
import camping1 from '../img/camping1.jpg';
import camping2 from '../img/camping2.jpg';
import camping3 from '../img/camping3.jpg';
import camping4 from '../img/camping4.jpg';
import camping5 from '../img/camping5.jpg';
import hiking from '../img/hiking.jpg';
import hiking1 from '../img/hiking1.jpg';
import hiking2 from '../img/hiking2.jpg';
import hiking3 from '../img/hiking3.jpg';
import hiking4 from '../img/hiking4.jpg';
import hiking5 from '../img/hiking5.jpg';
import hiking6 from '../img/hiking6.jpg';
import hiking7 from '../img/hiking7.jpg';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

function Gallery(){
	return(
		<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<Styledh1>Gallery</Styledh1>
			<StyledGallery>
				<img src={birdwatching2} alt="birdwatching2" />
				<img src={birdwatching3} alt="birdwatching3" />
				<img src={birdwatching4} alt="birdwatching4" />
				<img src={camping1} alt="camping1" />
				<img src={camping2} alt="camping2" />
				<img src={camping3} alt="camping3" />
				<img src={camping4} alt="camping4" />
				<img src={camping5} alt="camping5" />
				<img src={hiking} alt="hiking" />
				<img src={hiking1} alt="hiking1" />
				<img src={hiking2} alt="hiking2" />
				<img src={hiking3} alt="hiking3" />
				<img src={hiking4} alt="hiking4" />
				<img src={hiking5} alt="hiking5" />
				<img src={hiking6} alt="hiking6" />
				<img src={hiking7} alt="hiking7" />
			</StyledGallery>
		</motion.div>
	)
}

const Styledh1 = styled.h1`
	font-size: 4rem;
	text-align: center;
	margin: 10rem 0rem;
	color: #333;
	@media(max-width: 600px){
		margin: 5rem 0rem;
	}
`

const StyledGallery = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 10rem;
	img{
		width: 30%;
		height: auto;
		margin: 0.5rem;
		object-fit: cover;
		@media(max-width: 768px){
			width: 40%;
		}
		@media(max-width: 425px){
			width: 100%;
		}
	}
`

export default Gallery;