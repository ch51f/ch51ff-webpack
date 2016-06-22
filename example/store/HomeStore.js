let HomeStore = {
	list : [{
		id: "a",
		name: "A",
		data: [{
			id: "authority",
			name: "Authority",
			url: "/authority"
		}]
	}, {
		id: "b",
		name: "B",
		data: [{
			id: 'button',
			name: 'Button',
			url: '/button'
		}]
	}, {
		id: "d",
		name: "D",
		data: [{
			id: 'Dialog',
			name: 'Dialog',
			url: '/dialog'
		}]
	}, {
		id: "f",
		name: "F",
		data: [{
			id: 'focusmap',
			name: 'Focusmap',
			url: '/focusmap'
		}]
	}, {
		id: "k",
		name: "K",
		data: [{
			id: "quicklist",
			name: "QuickList",
			url: "/quicklist"
		}]
	}, {
		id: "l",
		name: "L",
		data: [{
			id: "loading",
			name: "Loading",
			url: "/loading"
		}]
	}, {
		id: "m",
		name: "M",
		data: [{
			id: "mask",
			name: "Mask",
			url: "/mask"
		}]
	}, {
		id: 's',
		name: 'S',
		data: [{
			id: 'svg',
			name: "Svg",
			url: "/svg"
		}]
	}, {
		id: 't',
		name: 'T',
		data: [{
			id: 'tab',
			name: 'Tab',
			url: "/tab"
		}, {
			id: 'table',
			name: 'Table',
			url: "/table"
		}, {
			id: 'tooltip',
			name: 'Tooltip',
			url: "/tooltip"
		}]
	}, {
		id: 'w',
		name: 'W',
		data: [{
			id: 'window',
			name: 'Window',
			url: "/window"
		}]
	}],

	getList() {
		return this.list;
	}
}

export default HomeStore