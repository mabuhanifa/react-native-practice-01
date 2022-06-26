import { Text, View } from 'react-native'

export default function Country({country}) {
  return (
    <View>
      <Text>Country {country.name.common}</Text>
    </View>
  )
}