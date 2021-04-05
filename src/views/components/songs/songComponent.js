import React from 'react';
import {
    TouchableOpacity,
    TouchableHighlight ,
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native';


export default ({
  content,
  onImgPress,
  onIconPress,
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
          <View style={ styles.imageIcon }>
                       <Image
                            source = {
                                require('../../../../assets/playButton.png')
                            }
                            style={{ width: 60, height: 60 }}
                          />
                  </View>
        </View>
        <View style={ styles.breaker }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
    padding: 10,
  },
  
  image: {
    height: 200,
    width:"100%",
    resizeMode: 'cover',
  },
  
  imageIcon: {
    opacity:0.8,
    marginTop:-135,
    marginLeft: "45%",
  },
  breaker:{
      marginTop: 50,
  },
  text: {
      fontSize: 28,
  },
  icon:{
    borderRadius:50,
  },
});