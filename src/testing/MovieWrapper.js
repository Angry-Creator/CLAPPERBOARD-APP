import { View } from 'react-native';
import CustomText from './CustomText';
import ImageWrapper from './ImageWrapper';

export default function MovieWrapper({src, customizedWidth=140, customizedHeight=110, movieName, movieDesc, customizedTextAlign = "left"}) {
  return (
    <View style={{margin: 5}}>
        <ImageWrapper src={src} customizedWidth={customizedWidth} customizedHeight={customizedHeight}/>
        <CustomText text={movieName} customizedFontWeight={"400"} customizedFontSize={16} customizedTextAlign={customizedTextAlign}/>
        <CustomText text={movieDesc} customizedFontWeight={"300"} customizedFontSize={12} customizedTextAlign={customizedTextAlign}/>
    </View>
  )
}