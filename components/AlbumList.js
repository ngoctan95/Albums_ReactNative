import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,ScrollView
} from 'react-native';
import axios from 'axios';
import styles from '../style/styleSheet';
import AlbumItem from '../components/AlbumItem';
class AlbumList extends Component{
    state={
        albums: [],
        isLoading:true
    };
    componentWillMount(){
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        .then((response)=>{
             console.log(response.data)
            this.setState({
                albums: response.data,
                isLoading:false
            })
        })
    } 
    _renderTitle(){
       return this.state.albums.map(album=>
        <AlbumItem key={album.title} album={album}/>
        );
    }
    _renderLoading(){
        return (
            <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                <Text >Loading, please wait...</Text>
            </View>
        )
    }
    render(){
        const text = this.state.isLoading?this._renderLoading():this._renderTitle();
        return(
            <ScrollView  >
               {text}
            </ScrollView> 
        ) 
    }
}
export default AlbumList;