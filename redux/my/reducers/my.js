let my = {
	name: "方驰皓",
	age: 27
}


export default function counter(state = my, action) {
	switch(action.type) {
		case 'SHOWNAME':
			my.name = 'ch51ff';
			return state
		case 'SHOWAGE':
			my.age = 0;
			return state
		default:
			return state
	}
}