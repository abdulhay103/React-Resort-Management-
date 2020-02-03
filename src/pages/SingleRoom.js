import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';


export class SingleRoom extends Component {
    constructor(props){

        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
        // console.log(this.state.slug);
        
    }
    static contextType = RoomContext;
    
    render() {
        const {getRoom} = this.context;
        const sRoom = getRoom(this.props.match.params.slug);
console.log(sRoom);

        if (!sRoom) {
            return (
                <div>
                    <h1>no room find</h1>
                </div>
            )
        }else{
            return (
                <div>
                    <h1>From "SingleRoom" single{sRoom.fields.name}</h1>
                </div>
            )
            
        }
    }
}

export default SingleRoom
