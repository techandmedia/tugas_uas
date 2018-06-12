import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = props => {
  // const Header = () => {

  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerUAS}</Text>
      {/* <Text style={textStyle}>Tugas UAS</Text> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  textStyle: {
    // paddingTop: 10,
    fontSize: 20,
    // fontWeight: "bold",
    fontFamily: "Itim",
    color: "#404040"
    // color: "#FFFFFF" // white 
    // color: '#FFFC19'  yellow
  }
});
