import React from 'react'
import Rooms from './Room.component'

export default function RoomsList({rooms}) {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Rooms key={item.id} room={item} />
                    })
                }
            </div>
        </section >
    )
}
