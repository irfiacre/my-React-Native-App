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
            style = {
              [ styles.image, {
                opacity: content.imageUrl && !content.imageUrl.includes('No image URL') ? 1 : 0.7,
              }]
            }
            source = {
              {
                uri: content.imageUrl && !content.imageUrl.includes('No image URL') ? content.imageUrl
                     : 'https://music.inyarwanda.com/assets/img/playButton.png'
              }
            }
          />
      </TouchableOpacity>
      <View style={ styles.songDetails }>
        <View style={ styles.details }>
              <Text 
                style={ styles.text }
                numberOfLines={1}
              >
                {content.name} 
              </Text> 
              <Text 
                style={ styles.text } 
                numberOfLines={1}
                >
                 { content.artistName }
              </Text>
              {/* {content.otherArtists && content.otherArtists.length > 0 ? (
                   <>
                     {'  '}
                     <Text
                       style={ styles.text }>
                       {'('} feat.{' '}
                     </Text>{' '}
                     {content.otherArtists.map((otherArtist, index) => (
                       <Text
                         style={ styles.text }
                         key={otherArtist.id}>
                         <Text style={ styles.text }>
                           {otherArtist.name}
                         </Text>
                         {content.otherArtists.length > 1 &&
                         index !== content.otherArtists.length - 1
                           ? ' & '
                           : null}
                       </Text>
                     ))}
                     <Text
                       style={ styles.text }>
                       {' )'}
                     </Text>
                   </>
              ) : null} */}
              
        </View>
        <TouchableHighlight 
            style={ styles.icon }
            onPress={()=> onIconPress(content)}
        >
          { 
              isSongs? 
                <View style={ styles.imageIcon }>
                     <Image
                          source = {
                              require('../../../../assets/playButton.png')
                          }
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
    // width: 250,
    padding: 20,
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