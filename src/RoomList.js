import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import Room from './Room'

const RoomList = ({rooms}) =>{
	return (
		<nav className={`RoomList ${css(styles.roomList)}`}>
			<h2 className={css(styles.h2)}>
				Rooms
			</h2>
			<ul className={css(styles.list)}>
				{
					Object.keys(rooms).map(
						roomName => (
							<Room roomName={roomName} key={roomName}/>
						)
					)
				}

				<li className={css(styles.item)}>
					<a href="#" className={css(styles.link)}>general</a>
				</li>
				<li className={css(styles.item)}>
					<a href="#" className={css(styles.link)}>random</a>
				</li>
			</ul>
		</nav>
	)
}

const styles = StyleSheet.create({
	roomList: {
		padding: '0 1rem',
	},

	h2: {
		fontSize: '1rem',
	},

	list: {
		listStyle: 'none',
		marginLeft: 0,
		paddingLeft: 0,
	},
})

export default RoomList