import React from 'react';
import {StyleSheet, Text, View,Switch, Slider,TouchableOpacity} from 'react-native';

export default class slider extends React.Component {
     state = {
     slideValue:0,
     switchValue:false
    }

render() {
    return(
        <View style={styles.container}>
            <Text style={styles.text2}>Press switch to become Young</Text>
            <Text style={{fontWeight:'bold',padding:8}}>{this.state.switchValue? 'Young' : 'Old'}</Text>
            <Switch value={this.state.switchValue} onValueChange={(switchValue) => this.setState({switchValue})} />
        <Text style={styles.text1}>Enter your Age</Text>
            <Text>{this.state.slideValue}</Text>
            <Slider style={{width:'50%'}} step={1} maximumValue={100} value={this.state.slideValue} onValueChange={(slideValue) => this.setState({slideValue})} />
        <TouchableOpacity style={styles.button}>
            <Text>Submit</Text>
        </TouchableOpacity>
        </View>
    );
}
  
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff8080'
    },
    text1:{
        fontWeight:'bold',
        fontSize:30,
        color:'#000',
        padding:8,
        alignSelf:'center',
        backgroundColor:'#fff',
        marginTop:40
    },
    text2:{
        padding:9,
        fontWeight:'bold',
        backgroundColor:'#fff'
    },
    button:{
        padding:8,
        backgroundColor:'#ffaa00',
        borderRadius:8

    }


});