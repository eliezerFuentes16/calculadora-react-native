import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import Button from "./src/components/Button";
import MyKeyboards from "./src/components/MyKeyboards";
import { styles } from "./src/styles/GlobalStyles";

export default function App() {
  const [theme, setTheme]=useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme==="light" ? stylesBody.container : [stylesBody.container, {backgroundColor:"#222"}]}>
        <StatusBar style="auto" />
        <Switch value={theme==="light"}
        onValueChange={()=>setTheme(theme==="light" ? "dark" : "light" )} style={styles.swicth}
        />
        <MyKeyboards/>
      </SafeAreaView>
    </ThemeContext.Provider>

  );
}

const stylesBody = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
});
