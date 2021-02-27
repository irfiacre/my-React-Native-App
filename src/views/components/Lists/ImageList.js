import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import ImageComponent from '../../../components/ImageComponent';

export default class ListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  
  handleOnImgPress = () => this.props.onImgPress;
  handleOnIconPress = () => this.props.onIconPress;
  
  render() {
  const {
    data,
    wrap,
    numberOfColumns
  } = this.props;
  
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
          keyExtractor={item => `${item.id}`}
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