export const pageAnimation = {
	hidden:{
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.25,
			when: "beforeChildren",
			staggerChildren: 0.25,
			ease: 'easeOut',
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.25,
		}
	}
}

export const fadeUp = {
	hidden:{
		y: 500,
	},
	show:{
		y: 0,
		transition:{
			duration: 0.5,
			ease: 'easeOut',
		}
	}
}
