import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = props => {
  const { viewStyle, nama, nama2 } = styles;
  return (
    <View style={viewStyle}>
      <View>
        <Text style={nama2}>{props.rumah}</Text>
      </View>
      <View>
        <Text style={nama}>{props.nama}</Text>
      </View>
      <View>
        <Text style={nama2}>{props.kembali}</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    justifyContent: "space-around", // horizontal
    alignItems: "center", // vertical
    height: 40
  },
  nama: {
    fontSize: 16,
    fontFamily: "GreatVibesRegular",
    color: "#404040"
  },
  nama2: {
    fontSize: 18,
    fontFamily: "OpenSansBold",
    color: "#404040"
  }
});
