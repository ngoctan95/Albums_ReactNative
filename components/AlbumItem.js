import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking
} from 'react-native';
import {styles}  from '../style/styleSheet';
import Card from './Card';
import CardSection from './CardSection';
import Button from '../components/Button';
const AlbumItem =({album})=>{
    const {title,artist,thumbnail_image,image,url} = album
    const widthPortHandler=Dimensions.get('window').width;
    const heightPortHandler=Dimensions.get('window').height;
        return(
            <Card >
                <CardSection>
                    <View>
                        <Image style={{width:50,height:50}} source={{uri : thumbnail_image}}/>
                    </View>
                    <View style={styles.firstSection}>
                        <Text style={styles.headerText}>{title}</Text>
                        <Text style={{justifyContent:'flex-end'}}>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View>
                        <Image source={{uri : image}} style={{height:heightPortHandler*0.6,width:widthPortHandler}}/>
                    </View>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{
                        Linking.openURL(url)}}
                        text={"Buy Now"}/>
                </CardSection>
            </Card>
        )
}
export default AlbumItem; 