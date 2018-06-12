import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const UserDetail = ({ userdata }) => {
  // const UserDetail = ({ userdata: {fullname, title, emailid, mobile} }) => {

  const { fullname, title, emailid, mobile, pp, ava } = userdata;
  const { container, image, image2, image2Container, content, textStyle, text2Style } = styles;
  const url = "https://app.subarnanto.com/";

  return (
    <Card>
      <CardSection>
        <View style={container}>
          <Image style={image} source={{ uri: url + pp }} />
        </View>
        <View style={content}>
          <Text style={text2Style}>{fullname}</Text>
          <Text style={textStyle}>{title}</Text>
          <Text style={textStyle}>{emailid}</Text>
          <Text style={textStyle}>{mobile}</Text>
        </View>
        <View style={image2Container}>
          <Image style={image2} source={require("../images/phone.png")} />
          <Image style={image2} source={require("../images/star.png")} />
          {/* <Image style={image2} source={require("../images/heart.png")} /> */}
        </View>
      </CardSection>
    </Card>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 10,
    height: 77,
    width: 77,
    borderRadius: 50,
    backgroundColor: "#fff"
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 50
  },
  image2: {
    // paddingTop: 5,
    height: 24,
    width: 24
  },
  image2Container: {
    marginRight: 5,
    justifyContent: "space-around",
    alignItems: "center",
    // height: 25,
    width: 30
  },
  content: {
    marginTop: 2,
    marginBottom: 2,
    flex: 1, // flex 1 supaya
    width: null, // null secara otomatis mengambil ukuran lebar yang tersisa setelah container dan image2container
    flexDirection: "column",
    justifyContent: "space-around"
  },
  textStyle: {
    fontFamily: "OpenSansRegular",
    fontSize: 12,
    color: '#fff'
  },
  text2Style: {
    fontFamily: "OpenSansRegular",
    fontSize: 14,
    fontWeight: "bold",
    color: '#fff'
  }
});
