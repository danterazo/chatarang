import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import base from './base'

class Chat extends Component {
	constructor(){
		super()

		this.state = {
			messages: [],
		}
	}

	addMessage = (body) =>{
		const messages = [...this.state.messages]
		const user = this.props.user

		messages.push({
			id: `${user.uid}-${Date.now()}`,
			user,
			body,
			createdAt: Date.now(),
		})

		this.setState({messages})
	}


	componentWillMount(){ // first argument in syncState is name of firebase data folder
		this.syncMessages()
	}

	componentDidUpdate(prevProps, _prevState, _snapshot){
		//underscore before variables means that they're passed in but not being used
		if(prevProps.room.name !== this.props.room.name){
			this.syncMessages()
		}
	}

	syncMessages = () =>{
		if(this.messagesRef){	// stop syncing with old
			base.removeBinding(this.messagesRef)
		}

		// sync new
		this.messagesRef = base.syncState(`messages/${this.props.room.name}`,
			{
				context: this,
				state: 'messages',
				asArray: true,
			})
	}

	componentWillUnmount(){
		base.removeBinding(this.messagesRef)
	}

	render(){
		return (
			<div className="Chat" style={styles}>
				<ChatHeader room={this.props.room}/>
				<MessageList room={this.props.room} messages={this.state.messages}/>
				<MessageForm addMessage={this.addMessage}/>
			</div>
		)
	}
}

const styles = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
}

export default Chat