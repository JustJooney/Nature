import hiking1 from './img/hiking1.jpg';
import camping1 from './img/camping1.jpg';
import birdwatching1 from './img/birdwatching1.jpg';

export function ActivityState(){
	return[
		{
			title: "Hiking",
			image: hiking1,
			url: '/activity/hiking',
			description: "This trail loops through two forests that stand side by side, but are separated in age by 2000 years. One forest is old-growth Douglas-fir and western red-cedar and the other is a young forest that was originally engulfed by lava flows from an eruption of Mount St. Helens over two millennia ago. This forest encompasses three-dimensional imprints of trees in the old lava beds called lava casts. The boardwalk trail loops through the two forests, and is kid friendly."
		},
		{
			title: 'Camping',
			image: camping1,
			url: '/activity/camping',
			description: "Planning a family get-together or company picnic? We have a large clubhouse available for rent and a large pinic area perfect for any occasion. The Nisqually river offers trout (Rainbow & Cutthroat) and salmon fishing. The salmon migrate in from the Puget Sound only a few miles down river and put up a good fight when hooked. Our campground offers two great gravel bars along the river, where you can catch fish all day long."
		},
		{
			title: 'Bird Watching',
			image: birdwatching1,
			url: '/activity/birdwatching',
			description: "Birdwatching is typically dismissed as a quiet hobby pursued by eccentrics, but it can be more like an extreme sport. Most birders keep a record of all the species they've spotted — their 'Life List' — and its size is a source of prestige. Intense competition results. It is a pastime often dominated by middle-aged men who seek out globe-trotting, cliff-dangling adventures, punctuated by bouts of dysentery and malaria, to fulfil their quest to see the rarest birds in the world."
		},
	]
}