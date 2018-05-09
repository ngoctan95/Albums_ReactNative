import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
export const styles=StyleSheet.create({
    container: {
        paddingTop:15,
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        opacity:0.5,
        shadowColor:'#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.5,
        elevation:2,
        position:'relative'
      },
      containerCard:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        paddingTop:5,
        borderBottomWidth:0,
        alignItems:'flex-start',
        justifyContent:'space-around',
        alignContent:'center',
        elevation:1
      },
      containerCardSection:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#FFF',
        justifyContent:'center',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
      },
      firstSection:{
        justifyContent:'space-around',
        flexDirection:'column',
        paddingLeft:5
      },
      headerText:{
          fontSize:20,
          justifyContent:'center',
          fontWeight:'bold'
      },
      text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      navButton:{
          alignItems:'flex-start'
      },
      textButton:{
          alignSelf:'center',
          color:'#007aff',
          fontSize:16
      },
      buttonStyle:{
          flex:1,
          alignSelf:'stretch',
          padding:10,
          borderWidth:1,
          borderRadius:3,
          borderColor:'#007aff'
      }
});
