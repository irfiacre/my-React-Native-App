import React from 'react';
import {
    TouchableOpacity,
    TouchableHighlight ,
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({
  content,
  onImgPress,
  onIconPress,
  isSongs
}) => {

  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={() => onImgPress(content)}>
          <Image
            style={ styles.image }
            source={{ uri:content.imageUrl ||content.image }}
          />
      </TouchableOpacity>
      <View style={ styles.footer } />
      <View style={ styles.footerContent }>
        <View style={ styles.details }>
              <Text 
                style={ styles.text }
                numberOfLines={1}
              >
                {content.name} 
              </Text>
                 {
                      content.artistName && <Text 
                      style={ styles.text } 
                      numberOfLines={1}>
                           { content.artistName }
                     </Text>
                 }
        </View>
        <TouchableHighlight 
            style={ styles.icon }
            onPress={()=> onIconPress(content)}
        >
          { 
              isSongs? 
                <View style={ styles.imageIcon }>
                     <Image
                          source={require('../../assets/playButton.png')}
                          style={{ width: 40, height: 40 }}
                        />
                </View>
              :<MaterialCommunityIcons name="playlist-music" size={30} color="#fff" />
          }
        </TouchableHighlight>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
    width: 250,
  },
  image: {
    height: 200,
    width:"100%",
    resizeMode: 'cover',
  },
  footer:{
    backgroundColor:"#000",
    opacity:0.7,
    marginTop:-65,
    height: 65,
  },
  footerContent:{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: -65,
      padding: 10,
  },
  text: {
      fontSize: 18,
      // width: "90%",
      color:"#fff"
  },
  icon:{
    borderRadius:50,
  },
});