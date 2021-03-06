import React, {Component} from 'react'
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'

import './App.css'
import {auth} from './base'
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'

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
		localStorage.setItem('user', JSON.stringify(user))
	}

	signedIn = () =>{
		return this.state.user.uid
	}

	signOut = () =>{
		auth.signOut()
	}

	handleUnauth = () =>{
		this.setState({user: {}})
		localStorage.removeItem('user')
	}

	render(){
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path="/sign-up" render={() => (
							this.signedIn()
							? <Redirect to="/chat"/>
							: <SignUp updateUser={this.updateUser}/>
						)}/>
						<Route path="/sign-in" render={() => (
							this.signedIn()
							? <Redirect to="/chat"/>
							: <SignIn/>
						)}/>
						<Route path="/chat/rooms/:roomName" render={(navProps) => (
							this.signedIn()
							? <Main
								user={this.state.user}
								signOut={this.signOut}
								{...navProps}
							/>
							: <Redirect to="/sign-in"/>
						)}/>
						<Route path="/chat" render={(navProps) => (
							this.signedIn()
							? <Main
								user={this.state.user}
								signOut={this.signOut}
								{...navProps}
							/>
							: <Redirect to="/sign-in"/>
						)}/>
						<Route render={() => (
							this.signedIn()
							? <Redirect to="/chat"/>
							: <Redirect to="/sign-in"/>
						)}/>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}

export default App