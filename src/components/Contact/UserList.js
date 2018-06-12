import React, { Component } from "react";
import axios from "axios";
import { ScrollView } from "react-native";
// import { StyleSheet, Text, View } from "react-native";
import UserDetail from './UserDetail';

class UserList extends Component {
  state = { users: [] };

  componentDidMount() {
    axios.get("https://app.subarnanto.com/users").then(res => {
      this.setState({ users: res.data });
    });
  }

  renderUsers() {
    return this.state.users.map(user => 
      <UserDetail key={user.fullname} userdata={user}/>
      // {/* <Text key={user.fullname} style={styles.text2Style}>Nama: {user.fullname}</Text> */}
    );
  }

  render() {
    return <ScrollView>{this.renderUsers()}</ScrollView>;
  }
}

export default UserList;


