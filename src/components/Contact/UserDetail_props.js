import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const UserDetail = props => {
  return (
    <Card>
      <CardSection>
        <View style={styles.image}>
          {/* <Image source={{ uri: props.userdata.imagelink }} /> */}
        </View>
        <View style={styles.content}>
          <Text style={styles.text2Style}>Nama: {props.userdata.fullname}</Text>
          <Text style={styles.text2Style}>Jabatan: {props.userdata.title}</Text>
          <Text style={styles.text2Style}>Email: {props.userdata.emailid}</Text>
          <Text style={styles.text2Style}>Mobile: {props.userdata.mobile}</Text>
        </View>
      </CardSection>
    </Card>

    // {/* <View>
    //   <Text style={styles.text2Style}>Nama: {props.userdata.fullname}</Text>
    // </View> */}
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    backgroundColor: "#bbb",
    borderRadius: 50,
    // display: "inline-block"
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  text2Style: {
    fontFamily: "OpenSansRegular",
    fontSize: 14
  }
});
