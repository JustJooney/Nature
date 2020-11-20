import styled from 'styled-components';
import hiking1 from '../img/hiking1.jpg';
import camping1 from '../img/camping1.jpg';
import birdwatching1 from '../img/birdwatching1.jpg';

function ActivitySection(){
	return(
		<Activity>
			<h1>Activities</h1>
			<section>
				<img src={hiking1} alt="hiking"/>
				<div>
					<h2>Hiking</h2>
					<p>This trail loops through two forests that stand side by side, but are separated in age by 2000 years. One forest is old-growth Douglas-fir and western red-cedar and the other is a young forest that was originally engulfed by lava flows from an eruption of Mount St. Helens over two millennia ago. This forest encompasses three-dimensional imprints of trees in the old lava beds called lava casts. The boardwalk trail loops through the two forests, and is kid friendly.</p>
				</div>
			</section>
			<section>
				<img style={{float: 'right', marginLeft: '2rem', marginRight: 0}} src={camping1}  alt='camping'/>
				<div>
					<h2>Camping</h2>
					<p>Planning a family get-together or company picnic? We have a large clubhouse available for rent and a large pinic area perfect for any occasion. The Nisqually river offers trout (Rainbow & Cutthroat) and salmon fishing. The salmon migrate in from the Puget Sound only a few miles down river and put up a good fight when hooked. Our campground offers two great gravel bars along the river, where you can catch fish all day long.</p>
				</div>
			</section>
			<section>
				<img src={birdwatching1} alt="bird"/>
				<div>
					<h2>Bird Watching</h2>
					<p>Birdwatching is typically dismissed as a quiet hobby pursued by eccentrics, but it can be more like an extreme sport. Most birders keep a record of all the species they've spotted — their 'Life List' — and its size is a source of prestige. Intense competition results. It is a pastime often dominated by middle-aged men who seek out globe-trotting, cliff-dangling adventures, punctuated by bouts of dysentery and malaria, to fulfil their quest to see the rarest birds in the world.</p>
				</div>
			</section>
		</Activity>
	)
}

const Activity = styled.div`
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin: 5rem 0rem;
	h1{
		color: #333;
		padding: 5rem;
		font-size: 3.5rem;
	}
	section{
		height: 50vh;
		margin: 3rem 0rem;
		overflow: hidden;
		color: #333;
		width: 70%;
		box-shadow: 0 0 20px gray;
		}
		img{
			float: left;
			width: 40%;
			height: 100%;
			object-fit: cover;
			margin-right: 2rem;
		}
		div{
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}
		h2{
			margin: 1rem 2rem;
			font-size: 2.5rem;
			font-family: 'Roboto', sans-serif;

		}
		p{
			font-family: 'Roboto', sans-serif;
			margin: 1rem 2rem;
			font-size: 1.3rem;	
		}
		#float-right{
			img{
				float:right;
			}
	}
`

export default ActivitySection;
