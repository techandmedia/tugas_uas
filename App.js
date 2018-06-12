import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import UserList from "./src/components/Contact/UserList";
import Footer from "./src/components/Footer";

export default class App extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Header headerUAS={"TUGAS UAS: Membuat Daftar Kontak"} />
        <UserList />
        <Footer rumah={"Home"} nama={"created by Eko Andri S."} kembali={"Back"}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#404040"
  }
});
