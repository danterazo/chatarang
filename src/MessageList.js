import React from 'react'

import Message from './Message'

// stateless functional component
const MessageList = () =>{
	const messages = [
		{id: 1, userName: 'drazo', body: 'hello!'},
		{id: 2, userName: 'dstrus', body: 'hello!'},
	]

	return (
		<div className="MessageList">
			{messages.map(msg => <Message message={msg} key={msg.id}/>)}
		</div>
	)
}

export default MessageList