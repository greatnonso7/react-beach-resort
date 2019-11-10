import React from 'react'
import RoomFilter from './RoomFilter.component'
import RoomList from './RoomList.component'
import { withRoomConsumer } from '../Context'
import Loading from './Loading.component'

function RoomContainer({context}) {
    const { loading, sortedRooms, rooms } = context

    if(loading === true) {
        return  <Loading />;
    }

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)





















// import React from 'react'
// import RoomFilter from './RoomFilter.component'
// import RoomList from './RoomList.component'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading.component'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {   value => {
//                     const { loading, sortedRooms, rooms } = value
//                     if(loading === true) {
//                         return <Loading />;
//                     }
//                     return (
//                         <div>
//                             Hello from Rooms container
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
//                         </div>
//                     ) 
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }
