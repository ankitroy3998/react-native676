import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

class nextpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  onChangeText() {}

  render() {
    const {navigation,route} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.child}>
        <Text style={styles.text}>Welcome To</Text>
          <Text style={styles.child1}>{route.params.data}</Text>
        </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#739900',
    flex: 1,
    justifyContent: 'center',
  },
  child: {
    width: '100%',
    flex: 1,
    backgroundColor: '#009933',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:40,
    color:'white'
  },
  child1:{
    fontSize: 30,
    color: '#000',
    justifyContent:'center'
  }
});

export default nextpage;