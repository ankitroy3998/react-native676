import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';
import SectionHeaderCustom from './SectionListHeader';
class sectionlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      isModalVisible: false,
      sectionListArray: [],
      items: [
        {
          categoryId: 'Main dishes',
          title: 'pizza',
          quantity: 2,
        },
        {
          categoryId: 'Main dishes',
          title: 'burger',
          quantity: 5,
        },
        {
          categoryId: 'Main dishes',
          title: 'rissoto',
          quantity: 4,
        },
        {
          categoryId: 'Main dishes',
          title: 'paneer',
          quantity: 2,
        },
        {
          categoryId: 'Main dishes',
          title: 'chicken',
          quantity: 2,
        },
       {
          categoryId: 'Drinks',
          title: 'coke',
          quantity: 1,
        },
        {
          categoryId: 'Drinks',
          title: 'water',
          quantity: 4,
        },
        {
          categoryId: 'Drinks',
          title: 'beer',
          quantity: 2,
        },
        {
          categoryId: 'Drinks',
          title: 'juice',
          quantity: 8,
        },
        {
          categoryId: 'Desserts',
          title: 'ice-cream',
          quantity: 8,
        },
        {
          categoryId: 'Desserts',
          title: 'cake',
          quantity: 5,
        },
        {
          categoryId: 'Desserts',
          title: 'kheer',
          quantity: 2,
        },
        {
          categoryId: 'Desserts',
          title: 'rasgulla',
          quantity: 6,
        },
      ],
    };
  }
  componentDidMount() {
    const {items} = this.state;
     const result = items.reduce(function(sections, item) {
        var section = sections.find(
          section => section.categoryId === item.categoryId,
        );
        if (!section) {
          section = {categoryId: item.categoryId, data: []};
          sections.push(section);
        }
        section.data.push(item);

        return sections;
      }, []);
      this.setState({
        sectionListArray: result,
      }, () => {
      console.log(this.state.sectionListArray);
      });
    }
    render() {
    const {sectionListArray} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={sectionListArray}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item} ) => <Item finaldata={item} />}
          renderSectionHeader={({ section: { categoryId,data} }) => (
            <View style={styles.header}>
            <Text style={styles.headerText}>{categoryId}</Text>
        
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

function Item({finaldata}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{finaldata.title}</Text>
      <Text style={styles.title}>{finaldata.quantity}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      backgroundColor:'#ffb366',
    flex: 1,
    
  },
  item: {
    backgroundColor: '#ffcccc',
    padding: 10,
    marginVertical: 8,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  header: {
    fontSize: 30,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headerText: {
    fontSize: 32,
    backgroundColor: '#fff',
    fontWeight:'bold',
  },
  title: {
    fontSize: 20,
  },
});

export default sectionlist;