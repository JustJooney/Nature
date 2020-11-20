import AboutSection from '../components/AboutSection';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

function About(){
	return(
		<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<AboutSection/>
		</motion.div>
	)
}

export default About;