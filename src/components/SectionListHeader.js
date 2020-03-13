import React from 'react';  
import {SectionList, StyleSheet, Text, View ,SafeAreaView} from 'react-native'; 


class SectionListHeader extends React.Component {
    constructor(props) {
      super(props);
      
    }

    render(){

        const{title}=this.props
        return  (

      <Text> {title} </Text>
        );

    }
}

export  default SectionListHeader;