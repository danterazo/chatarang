import React, {Component} from 'react'

class SignIn extends Component{
	state = {
		email: '',
	}

	// see React documentation
	handleChange = (ev) =>{
		this.setState({email: ev.target.value})
	}

	render(){
		return (
			<div className="SignIn">
				<form>
					<input autoFocus type="email" name="email" placeholder="Enter your email"
						   value={this.state.email} onChange={this.handleChange}></input>
				</form>
			</div>
		)
	}
}

export default SignIn