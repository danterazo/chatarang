import React from 'react'

import Message from './Message'

// stateless functional component
const MessageList = (props) =>{
	return (
		<div className="MessageList" style={styles.messageList}>
			{
				props.messages.map(msg => (
					<Message message={msg} key={msg.id}/>
				))
			}
		</div>
	)
}

const styles = {
	messageList: {
		backgroundColor: "white",
		flex: 1,
		paddingBottom: "1rem",
		overflowY: "scroll",
	}
}

/* Leftover CSS:
.MessageList .roomAnnouncement {
  padding: 2rem 1rem;
}

.MessageList .roomAnnouncement h3 {
  font-size: 1.5rem;
}
 */

export default MessageList