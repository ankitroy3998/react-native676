import React from 'react';
import {View, Text, StyleSheet,SafeAreaView,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from "react-native-modal";

class modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text:'',
      isModalVisible:false,
      itemlist:[
        {
            product:'Brushes',
            cost:20,
            type:'new',

        },
        {
            product:'combs',
            cost:20,
            type:'new',

        },
        {
            product:'newspapers',
            cost:20,
            type:'old',

        },
        {
            product:'books',
            cost:20,
            type:'old',

        },
        {
            product:'plates',
            cost:20,
            type:'new',

        },
        {
            product:'Bottles',
            cost:20,
            type:'new',

        },
        {
            product:'chairs',
            cost:20,
            type:'old',

        },
        {
            product:'bags',
            cost:20,
            type:'new',

        },
        {
            product:'phones',
            cost:20,
            type:'old',

        },
        {
            product:'covers',
            cost:20,
            type:'new',

        },
        {
            product:'Bedsheets',
            cost:20,
            type:'new',

        },
        {
            product:'tables',
            cost:20,
            type:'old',

        },
        {
            product:'earphones',
            cost:20,
            type:'new',

        },
        {
            product:'chargers',
            cost:20,
            type:'old',

        }

    ],
    };
}
toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };
onPress=(item) =>{
    this.setState({text:item.product,isModalVisible:true})
}
render() {
    const {navigation} = this.props;
    const {text,itemlist,isModalVisible} = this.state;

   
    return (
      <SafeAreaView style={styles.container}>
         <FlatList
          showsVerticalScrollIndicator={false}
          data={itemlist}
          renderItem={({item})=>{
              return (
             <TouchableOpacity style={styles.elements}
             onPress={() => {this.onPress(item)}}>
                
                <Text style={styles.text}>{item.product} </Text>
                 <Text style={styles.text}>{item.cost} </Text>
                 <Text style={styles.text}>{item.type} </Text>

             </TouchableOpacity>
              );
          }}>

          </FlatList>
          
    <Modal isVisible={this.state.isModalVisible}
          animationIn='slideInDown'
          animationInTiming={500}
          onBackdropPress={this.toggleModal}>
          <View style={{ flex: 0.2,backgroundColor:'#fff' }}>
        <Text style={styles.modaltext}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={this.toggleModal}  onPress={()=>{this.toggleModal(),navigation.navigate('nextpage',{data:`${text}`})}}>
                <Text>Proceed To Next</Text>
                </TouchableOpacity>
               
          </View>
        </Modal>
      </SafeAreaView>

    );
  }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b3e0ff',
    flex: 1,
   justifyContent: 'center',
  },
  elements:
   {height:100,
    marginHorizontal:20,
    borderRadius:10,
    marginBottom:10,
    padding:5,
    backgroundColor:'#80ccff'
    },
    text:{
        fontSize:20,
        flex:1,
        padding:8,
        color:'#fff'
    },
    button:{
        padding:8,
        backgroundColor:'#ff9999',
        alignSelf:'center',
        fontSize:20
    },
    modaltext:{
        alignSelf:'center',
        padding:8,
        backgroundColor:'#ffa64d',
        marginTop:30
    }

});

export default modal;