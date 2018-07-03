import React, {Component} from 'react'

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm'

class Chat extends Component{
	constructor(){
		super()
		this.state = {
			messages: [
				{id: 1, userName: 'drazo', body: 'hello!!'},
				{id: 2, userName: 'dstrus', body: 'hello!'},
			]
		}
	}

	render(){
		return (
			<div className="Chat">
				<ChatHeader/>
				<MessageList messages={this.state.messages}/>
				<MessageForm/>
			</div>
		)
	}
}

export default Chat