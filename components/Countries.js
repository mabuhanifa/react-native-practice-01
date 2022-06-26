import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Country from "./Country";

export default function countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    
  },[])
  return (
    <View>
      <Text>Countries : {countries.length} </Text>
      <ScrollView>
{
    countries.map((country) => <Country country={country}></Country>)
}
      </ScrollView>
    </View>
  );
}
