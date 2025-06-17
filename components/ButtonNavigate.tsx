import Feather from "@expo/vector-icons/Feather";
import { Href, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  href: Href;
  text: string;
};

const ButtonNavigate = ({ href, text }: Props) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.navigate(href);
      }}
      style={styles.button}
    >
      <Text style={styles.text}>{text}</Text>
      <Feather name="chevron-right" size={24} color="black" />
    </Pressable>
  );
};

export default ButtonNavigate;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    color: "black",
  },
});
