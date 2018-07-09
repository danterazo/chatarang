import React, {Component} from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
	state = {
		room: {
			name: "s3morning",
			description: "Ask questions and share code",
		},

		rooms: {
			s3morning: {
				name: "s3morning",
				description: "",
			},

			general: {
				name: "general",
				description: "",
			},

			random: {
				name: "random",
				description: "",
			},
		},
	}

	setCurrentRoom = roomName =>{
		const room = this.state.rooms[roomName]
		this.setState({room})
	}

	render(){
		return (
			<div className="Main" style={styles}>
				<Sidebar user={this.props.user} signOut={this.props.signOut}/>
				<Chat user={this.props.user} room={this.state.room}/>
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