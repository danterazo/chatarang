import React, {Component} from 'react'

class RoomForm extends Component {
	state = {
		room: {
			name: "",
			description: "",
		},
	}

	handleChange = ev =>{
		const room = {...this.state.room}
		room[ev.target.name] = ev.target.value

		this.setState({room})
	}

	handleSubmit = ev =>{
		ev.preventDefault()
		this.props.addRoom()
	}

	render(){
		return (
			<div className="RoomForm">
				<main>
					<h2>Create a Room</h2>
					<form>
						<p>
							<label htmlFor="name">
								Room Name
							</label>
							<input autoFocus required type="text" name="name"
								   onChange={this.handleChange}/>
						</p>
						<p>
							<label htmlFor="description">
								Description
							</label>
							<input type="text" name="description"
								   value={this.state.room.description}
								   onChange={this.handleChange}/>
						</p>
						<div>
							<button type="submit">
								Create Room
							</button>
						</div>
					</form>
				</main>
			</div>
		)
	}
}

export default RoomForm