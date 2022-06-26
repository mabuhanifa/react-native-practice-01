import { Image, StyleSheet, Text, View } from "react-native";

export default function Country({ country }) {
  return (
    <View>
      <Text style={styles.header}>Country : {country.name.common}</Text>
      <Image
        source={{
          uri: country.flags.png,
        }}
        style={{ width: 200, height: 200 }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
    header :{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        color : "#2e2e2e",
    }
});