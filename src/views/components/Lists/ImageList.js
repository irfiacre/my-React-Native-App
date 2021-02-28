import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
} from 'react-native';
import ImageComponent from '../../../components/ImageComponent';
import randomId from '../../../helpers/RandomId'

export default class ListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  
  handleOnImgPress = (data) => this.props.onImgPress(data);
  handleOnIconPress = (data) => Alert.alert("Waring", " I am sorry We Can't play songs currently", [{
      text: '👍🏿 No Worries',
    },
    {
      text: '👎🏿 Boo',
    },
  ])
  // this.props.onIconPress(data);
  
  render() {
  const {
    data,
    wrap,
    numberOfColumns
  } = this.props;
  // console.log(">>>>>", randomId(1));
    return (
      <View style={styles.container}>
         <FlatList 
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={data} 
          renderItem={({ item })=>(
            <ImageComponent 
                content={ item }
                onImgPress={this.handleOnImgPress}
                onIconPress={this.handleOnIconPress}
                isSongs 
           />
          )} 
          keyExtractor={item =>  randomId(item.id)}
          horizontal={ !wrap }
          numColumns={ wrap? numberOfColumns : null}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{},
  list: {
    paddingHorizontal: 5,
  },
  listContainer:{
    alignItems:'center',
  },
  separator: {
    marginTop: 10,
  },
}); 