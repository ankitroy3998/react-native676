import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class broadband extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  onChangeText() {}

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.child}>
          <Text style={styles.child2}>
            Recharge
          </Text>
        </View>

        <View style={styles.child1}>
            <Text style={styles.child4}>Enter Amount</Text>
            <Text style={styles.child5}>Recommended Recharge</Text>
            <TextInput placeholder="₹ 999" placeholderTextColor="#000" style={styles.child3}></TextInput>
            <TouchableOpacity>
            <Text style={styles.child6}>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>


        <View style={styles.child7}>
            <Text style={styles.child8}>Recommended plans</Text>
            <Text style={styles.child9}>View all plans > </Text>
          </View>



        <View style={styles.child10}>
              <Text style={styles.child11}>Unlimited Data</Text>
                  <View style={styles.child12}>
                  <Text style={{fontSize:15,marginTop:'7%'}}> Validity {'\n'} 30 days </Text>
                  <Text style={{fontSize:15,marginTop:'7%'}}>    | Speed {'\n'}    | 50 Mbps</Text>
        </View>
                
                
          <Text style={{padding:10,marginTop:20,fontSize:20,fontWeight:'bold'}}>Unlimited Data</Text>
        <View style={styles.child13}>
          <Text style={{fontSize:15,marginTop:'7%'}}> Validity {'\n'} 30 days </Text>
          <Text style={{fontSize:15,marginTop:'7%'}}>    | Speed {'\n'}    | 50 Mbps</Text>
    </View>

        </View>

      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    justifyContent: 'center',
  },
  child: {
    width: '100%',
    flex: 1,
    backgroundColor: '#4B2875'
  },
  child1:{
    backgroundColor: '#fff',
    width: '95%',
    marginLeft:'2.5%',
    position:'relative',
    marginTop:-50,
    borderRadius:10,
  },
  child2:{
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
  },
  child3:{
    padding:4,
    fontSize:45,
    borderBottomColor:'#00f',
    borderBottomWidth:2,
    alignSelf:'center',
    marginTop:20,
    fontWeight:'bold'
  },
  child4:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10
  },
  child5:{
    fontSize:15,
    textAlign:'center',
    marginTop:10,
    color:'#9494B8'
  },
  child6:{
    alignSelf:'center',
    backgroundColor:'#DB326C',
    color:'#fff',
    fontSize:20,
    padding:10,
    marginTop:8
  },
  child7:{
    backgroundColor: '#E3DFDE',
    width: '95%',
    marginTop:10,
    marginLeft:'2.5%',
    flexDirection:'row',
    flex:0.2
  },
  child8:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:15
  },
  child9:{fontSize:15,
    marginTop:15,
    marginHorizontal:'30%',
    color:'#00f'
  },
  child10:{
    backgroundColor: '#fff',
    width: '95%',
    marginLeft:'2.5%',
    marginTop:10,
    marginBottom:20,
    borderRadius:10,
    flex: 2
  },
  child11:{
    padding:10,
    marginTop:20,
    fontSize:20,
    fontWeight:'bold'

  },
  child12:{
    flexDirection:'row',
    backgroundColor: '#fff',
    width: '95%',
    marginLeft:'2.5%',
    flex:0.5,
    borderBottomColor:'#000',
    borderBottomWidth:1
  },
  child13:{
    flexDirection:'row',
    backgroundColor: '#fff',
    width: '95%',
    marginLeft:'2.5%',
    flex:0.5
  },
}
);

export default broadband;