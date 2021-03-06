import React, {Component} from "react"
//import {Route, Switch, Redirect} from 'react-router-dom'

import Sidebar from "./Sidebar"
import Chat from "./Chat"
import RoomForm from "./RoomForm"
import base from "./base"

class Main extends Component {
	state = {
		room: {
			name: "general",
			description: "Chat about stuff",
		},

		rooms: {},
	}

	componentDidMount(){
		this.roomsRef = base.syncState(
			"rooms",
			{
				context: this,
				state: "rooms",
				defaultValue: {
					general: {
						name: "general",
						description: "Chat about stuff",
					},
				},
			},
		)
	}

	componentWillUnmount(){
		base.removeBinding(this.roomsRef)
	}

	addRoom = room =>{
		const rooms = {...this.state.rooms}
		rooms[room.name] = room
		this.setState({rooms})
	}

	setCurrentRoom = roomName =>{
		const room = this.state.rooms[roomName]
		this.setState({room})
	}

	showRoomForm = () =>{
		this.setState({showRoomForm: true})
	}

	hideRoomForm = () =>{
		this.setState({showRoomForm: false})
	}

	render(){
		if(this.state.showRoomForm){
			return <RoomForm addRoom={this.addRoom}/>
		}

		return (
			<div className="Main" style={styles}>
				<Sidebar user={this.props.user} rooms={this.state.rooms}
						 signOut={this.props.signOut}
						 setCurrentRoom={this.setCurrentRoom}/>
				<Chat user={this.props.user} room={this.state.room}/>
			</div>
		)
	}
}

const styles = { // Styling in JavaScript
	display: "flex",
	alignItems: "stretch",
	height: "100vh", // "vh" percentage of height of window
}

export default Main