import React, { Component } from 'react';
import { RoomContext } from "../Context";
import Loading from './Loading';
import Room from './Room';
import Title from './Title'


export default class FaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms: rooms} = this.context;
        let fRooms = ''
 if (!rooms) {
     
 }else{
    // console.log(rooms);
      fRooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });
 }
        
       
        
        return (
            
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : fRooms}
                </div>
            </section>
        )
    }
}
