import React from 'react'

import RoomList from './RoomList'
/* ORIGINAL JAVASCRIPT:
const Sidebar = (props) =>{
	return (
		<div className="Sidebar">
			{props.user.displayName}
		</div>
	)
}
*/

// DAVEY JAVASCRIPT:
const Sidebar = (props) =>{
	return (
		<aside className="Sidebar" style={styles.sidebar}>
			<div className="UserInfo" style={styles.children}>
				<div className="user">
					{props.user.displayName}
				</div>
				<a href="#">
				</a>
			</div>
			<h1 style={styles.h1}>
				XTBC 18
			</h1>
			<RoomList/>
		</aside>
	)
}

// TODO: fix link style
const styles = {
	sidebar: {
		backgroundColor: '#333344',
		color: 'rgba(255, 255, 255, 0.8)',
		width: '12rem',
		padding: '1rem 0',
		display: 'flex',
		flexDirection: 'column',
	},

	h1: {
		color: 'white',
		fontSize: '1.2rem',
		marginTop: 0,
		padding: '0 1rem',
	}
}

export default Sidebar