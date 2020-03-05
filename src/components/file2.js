import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
  } from 'react-native';

class file2 extends React.Component {
  constructor(props) {
    super(props);
    
  };

  render() {
 
    const {navigation,route} = this.props;
   return (
        
      <View style={styles.container}>
          
          <TouchableOpacity 
            onPress={() => {
              navigation.navigate('file3',{data:`${route.params.data} kumar`})}}>
                  <Text>{`${route.params.data} kumar`}</Text>
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
 
});

export default file2;

