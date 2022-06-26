import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Country from "./Country";

export default function countries() {
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        setCountries(data);
      });
  }, []);
  const handleSearch = (text) => {
    const filtered = countries.filter((country) =>
      country.name.common.includes(text)
    );
    setSearch(filtered);
  };
  return (
    <View>
      <Text>Countries : {countries.length} </Text>
      <TextInput 
      onChangeText={handleSearch}
      style={styles.input}
      >

      </TextInput>
      <ScrollView>
        {search.map((country) => (
          <Country country={country}></Country>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginTop: 50,
    borderBottomColor: "#000000",
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
  },
});
