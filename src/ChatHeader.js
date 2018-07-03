import React from 'react'

// stateless functional component
const ChatHeader = () =>{
	return (
		<header className="ChatHeader" style={style1}>
			<div className="roomInfo" style={style2}>
				<h2 style={style3}>#general</h2>
				<p>Announcements and general chat</p>
			</div>
		</header>
	)
}

const style1 = {
	backgroundColor: "#f3f3f3",
	borderBottom: "1px solid #ccc",
	height: "3rem",
	padding: "0 1rem",
	display: "flex",
	alignItems: "center",

}

const style2 = {
	fontSize: "1.1rem",
	margin: "0",
}

const style3 = {
	color: "#999",
	margin: "0",
	fontSize: "0.8rem",
}

// NOTE: if state isn't needed, make a stateless functional component

export default ChatHeader