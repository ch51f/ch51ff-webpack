export default class Test {
	constructor() {
		this.name = "fch";
		this.getName = (info)=>{
			return 'kyle'
		}
	}
	get prop() {
		return 'getter';
	}
	set prop() {
		console.log('setter: '+value);
	}
}

