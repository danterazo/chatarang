import React from 'react'

const Message = (props) =>{
	return (
		<div className="Message" style={style1}>
			{props.message.user.displayName}: {props.message.body}
		</div>
	)
}

const style1 = {
	display: "flex",
	marginTop: "1rem",
	padding: "0 1rem",
}

/*
.Message .details {
  flex: 1;
  padding-left: 0.5rem;
}
*/

export default Message