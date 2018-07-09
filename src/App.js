import React, {Component} from 'react'
import {auth} from './base'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
	constructor(){
		super()

		this.state = {
			user: {},
		}
	}

	componentDidMount(){
		auth.onAuthStateChanged(user =>{
			if(user){
				// User is signed in
				this.handleAuth(user)
			} else {
				// User is signed out
				this.handleUnauth()
			}
		})
	}

	handleAuth = (oAuthUser) =>{
		const user = {
			uid: oAuthUser.uid,
			displayName: oAuthUser.displayName,
			email: oAuthUser.email,
			photoUrl: oAuthUser.photoURL,
		}

		this.setState({user})
	}

	signedIn = () =>{
		return this.state.user.uid
	}

	signOut = () =>{
		auth.signOut()
		this.setState({user: {}})
		localStorage.removeItem('user')
	}

	handleUnauth = () =>{
		this.setState({user: {}})
		localStorage.removeItem('user')
	}

	render(){
		return (
			<div className="App">{
				this.signedIn() // ternary
					? <Main user={this.state.user} signOut={this.signOut}/>
					: <SignIn handleAuth={this.handleAuth}/>
			}
			</div>
		)
	}
}

export default App