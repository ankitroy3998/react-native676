/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  onChangeText(text) {}

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text>{'Username: ' + this.state.text} </Text>
        <TextInput
          style={{
            height: 50,
            width: '90%',
            borderColor: '#000',
            borderWidth: 2,
          }}
          onChangeText={text => this.setState({text})}
        />
        <Text>{'Password: ' + this.state.input}</Text>
        <TextInput
          style={{
            height: 50,
            width: '90%',
            borderColor: '#000',
            borderWidth: 2,
          }}
          onChangeText={input => this.setState({input})}
        />
        {
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
 // componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#4080bf',
    fontWeight:'bold',
    
  },
});

export default Login;
