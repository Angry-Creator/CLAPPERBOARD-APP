import { Image } from "react-native"

export default function ImageWrapper({src, customizedResizeMode = "contain", customizedWidth = 50, customizedHeight = 50, customizedMargin = 100, customizedMarginLeft}) {
  return (
    <Image resizeMode={customizedResizeMode} source={src} style={{width: customizedWidth, height: customizedHeight, marginLeft: customizedMarginLeft}}/>
  )
}