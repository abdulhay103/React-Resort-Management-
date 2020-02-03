import React, { Component } from 'react';
import items from './data'

const RoomContext = React.createContext();
// <RoomContext.Provider value= {'Hello'}

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRoom: [],
        loading: true
    };

    // getData
    componentDidMount(){
        // this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter( room => room.fields.featured === true);
        // console.log(featuredRooms);
        
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        }) 
    }

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image =>image.fields.file.url);
            let room = {...item, images, id};
            return room;
            
        })
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        if (!tempRooms) {
            
        }else{
            const rooms = tempRooms.find( room => room.slug !== slug );
            return rooms;        
        }


        
    }

    render() {
        
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomProvider, RoomConsumer };