import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {ActivityState} from '../ActivityState';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

function ActivityDetail(){
	const history = useHistory();
	const url = history.location.pathname;
	const [activities, setActivities] = useState(ActivityState);
	const [activity, setActivity] = useState(null);

	useEffect(() => {
		const currentActivity = activities.filter((stateActivity) => {
			return stateActivity.url === url
		});
		setActivity(currentActivity[0]);
		console.log(activity);
	},[activity, url]);

	return(
		<StyledDetail variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			{activity &&
				<>
					<h1>{activity.title}</h1>
					<div>
						<p>{activity.description}</p>	
						<img src={activity.image} alt={activity.title}/>							
					</div>
				</>
			}
		</StyledDetail>
	)
}

const StyledDetail = styled(motion.div)`
	margin: auto;
	width: 50%;
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1{
		font-size: 5rem;
		margin: 2rem;
	}
	img{
		width: 100%;
		height: 50%;
		object-fit: cover;
		float: left;
		margin-bottom: 2rem;
	}
	p{
		padding: 1rem;
		font-size: 1.3rem;
		font-family: 'Roboto' , sans-serif;
	}
`

const AcitivtyDetail = styled.div`
	
`

export default ActivityDetail;