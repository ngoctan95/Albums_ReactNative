import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {styles} from '../style/styleSheet'
class header extends Component{
    render(){
        return(
            <View style={this.props.style}>
            {/* <View style={{flex:2,justifyContent:'center'}}>
                <TouchableOpacity style={{marginLeft:15}}
                    onPress={()=>{alert("ok")}}> 
                    <Text style={{color:'black'}}>Home</Text>
                </TouchableOpacity>
            </View> */}
            <View style={{justifyContent:'center',flex:10}}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
            </View>
        )
    }
}
export default header;