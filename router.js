import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/components/login';
import Home from './src/components/home';
import * as React from 'react';
import file1 from './src/components/file1';
import file2 from './src/components/file2';
import file3 from './src/components/file3';
import {Button} from 'react-native';
const Stack = createStackNavigator();


const MyStack = () => {
  
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="file1" component={file1} />
      <Stack.Screen name="file2" component={file2} />
      <Stack.Screen name="file3" component={file3} />

      </Stack.Navigator>
  
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

//  options={{
//        headerBackImage:
//         headerLeft: () => (
//           <Button
//             onPress={() => alert('This is a button!')}
//             title="Info"
//             color="#000"
//           />
//         ),
//       }} />





