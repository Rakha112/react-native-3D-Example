import ButtonNavigate from "@/components/ButtonNavigate";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated style="dark" />
      <ButtonNavigate href={"/box"} text="Box" />
      <ButtonNavigate href={"/character"} text="Character" />
      <ButtonNavigate href={"/starlink"} text="Starlink" />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
