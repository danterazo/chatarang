import React from 'react'

// stateless functional component
const ChatHeader = () =>{
	return (
		<header className="ChatHeader">
			<div className="roomInfo">
				<h2>#general</h2>
				<p>Announcements and general chat</p>
			</div>
		</header>
	)
}

// NOTE: if state isn't needed, make a stateless functional component

export default ChatHeader