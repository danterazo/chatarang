import React from 'react'

const SignOutButton = () =>{
	return (
		<button style={styles}>
			<i className="fas fa-sign-out-alt"></i>
		</button>
	)
}

const styles = {
	border: 0,
	padding: 0,
	backgroundColor: 'transparent',
	color: 'rgba(255, 255, 255, 0.6)',
	fontSize: '1.2rem',
	transition: 'color 0.25s ease-out',
	cursor: 'pointer',
}

export default SignOutButton