import { Text } from "react-native";

export default function CustomText({text, customizedFontSize = 16, customizedFontWeight = "300", customizedColor = "white", customizedMarginTop = 0, customizedMarginBottom = 0 , customizedTextAlign = "left"}) {
  return (
    <Text style={{textAlign: customizedTextAlign, fontSize: customizedFontSize, fontWeight: customizedFontWeight, color: customizedColor, marginTop: customizedMarginTop, marginBottom: customizedMarginBottom}}>
        {text}
    </Text>
  )
}
