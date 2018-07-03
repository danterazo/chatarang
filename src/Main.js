import React, {Component} from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component{
	render(){
		return (
			<div className="Main" style={styles}>
				<Sidebar/>
				<Chat/>
			</div>
		)
	}
}

// Styling in JavaScript
const styles = {
	display: 'flex',
	alignItems: 'stretch',
	height: '100vh', // 'vh' percentage of height of window
}

export default Main