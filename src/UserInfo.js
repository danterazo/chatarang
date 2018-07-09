import React from 'react'
import SignOutButton from './SignOutButton'

const UserInfo = ({user}) =>{
	return (
		<div
			className="UserInfo"
			style={styles.userInfo}
		>
			<div className="Avatar"></div>
			<div className="user" style={styles.user}>
				{user.displayName}
			</div>
			<SignOutButton/>
		</div>
	)
}

const styles = {
	userInfo: {
		padding: '0 1rem',
		marginBottom: '1rem',
		display: 'flex',
		alignItems: 'center',
	},

	user: {
		flex: 1,
		overflowX: 'hidden',
		textOverflow: 'ellipsis'
	}
}

export default UserInfo