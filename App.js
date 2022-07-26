import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const [text, setText] = useState('');
  return(
      <View
      style={styles.container}>
        <ScrollView>
          <Text>{text}</Text>
          <Image
              style={styles.logo}
              source={{
                uri: 'data:image/png;base64,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',
              }}
          />
          <TextInput
              style={{height: 40}}
              placeholder="Type here!"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
          />
          <StatusBar style="auto" />
          <View>
            <Blogs/>
          </View>
          <View>
            <ScrollView>
              <Footer/>
            </ScrollView>
          </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width:126,
    height: 128,
  },
});