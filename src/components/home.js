/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  checkSwitch = id => {
    switch (id) {
      case 1:
        Alert.alert('Top Left Image Pressed');
        break;
      case 2:
        Alert.alert('Top Right Image Pressed');
        break;
      case 3:
        Alert.alert('Bottom Left Image Pressed');
        break;
      case 4:
        Alert.alert('Bottom Right image pressed');
        break;
      case 5:
        Alert.alert('Center Button Pressed');
        break;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.innercontainer, {alignItems: 'flex-start'}]}>
          <TouchableOpacity onPress={() => this.checkSwitch(1)}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
          <Text
            style={{fontSize: 40, textAlign: 'center', alignSelf: 'center'}}>
            Top
          </Text>
          <TouchableOpacity onPress={() => this.checkSwitch(2)}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.innercontainer, {alignItems: 'center'}]}>
          <Text style={{fontSize: 40}}>Left</Text>
          <Button
            title="Button"
            color="#660000"
            onPress={() => this.checkSwitch(5)}
          />
          <Text style={{fontSize: 40}}>Right</Text>
        </View>

        <View style={[styles.innercontainer, {alignItems: 'flex-end'}]}>
          <TouchableOpacity onPress={() => this.checkSwitch(3)}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>

          <Text style={{fontSize: 40, alignSelf: 'center'}}>Bottom</Text>

          <TouchableOpacity onPress={() => this.checkSwitch(4)}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    //console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cc99ff',
    flex: 1,
    justifyContent: 'space-between',
  },
  innercontainer: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageformat: {width: 100, height: 100, resizeMode: 'cover'},
});

export default Home;
