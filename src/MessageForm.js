import React, {Component} from 'react'

class MessageForm extends Component{
	state = {
		body: '',
	}

	handleSubmit = (ev) =>{
		ev.preventDefault()
		this.props.addMessage(this.state.body)
		this.setState({body: ''})
	}

	handleChange = (ev) =>{
		this.setState({body: ev.target.value})
	}

	render(){
		return (
			<form className="MessageForm" onSubmit={this.handleSubmit} style={styles.form}>
				<input autoFocus required type="text" name="body" placeholder="Type a message..."
					   value={this.state.body} onChange={this.handleChange} style={styles.input}/>
				<button type="submit" style={styles.button}>Send</button>
			</form>
		)
	}
}

const styles = {
	form: {
		backgroundColor: "white",
		height: "3rem",
		display: "flex",
		alignItems: "stretch",
		border: "2px solid #999",
		borderRadius: "0.5rem",
		margin: "0.25rem",
		padding: 0,
	},

	input: {
		display: "flex",
		borderRadius: "0.5rem",
		alignItems: "center",
		backgroundColor: "white",
		color: "#ccc",
		padding: "0 0.5rem",
		fontSize: "1.2rem",
	},

	button: {
		fontSize: "1.5rem",
		backgroundColor: "#1A8FE3",
		color: "white",
		paddingLeft: "1rem",
		paddingRight: "1rem",
		borderTopRightRadius: "0.5rem",
		borderBottomRightRadius: "0.5rem",
		border: "1px solid white",
	}
}

/*


.MessageForm .chatIcon {

}

.MessageForm input {

}
.MessageForm input:focus {
  outline: 0;
}

.MessageForm button {
  font-size: 1.5rem;
  background-color: #1A8FE3;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: 1px solid white;
}
 */

export default MessageForm