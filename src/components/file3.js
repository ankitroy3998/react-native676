import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
  } from 'react-native';

class file3 extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
 
    const {navigation,route} = this.props;
    
return (
        <View style={styles.container}>
            
             <TouchableOpacity
             onPress={() => navigation.setOptions({title: `${route.params.data} Roy`})}>
                  <Text>{`${route.params.data} Roy`}</Text>
             </TouchableOpacity>
        </View>
        
      
    );
  };
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#6699ff',
    fontWeight:'bold',
    
  },
  innertext:{
      fontWeight:'bold',
      padding:8,
      backgroundColor:'#fff',
      fontSize:30
  }
});

export default file3;

