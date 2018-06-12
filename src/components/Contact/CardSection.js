import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={styles.container}>{props.children}</View>;
};

export default CardSection;

// ini supaya foto user sejajar dengan user detail
const styles = {
  container: {
    // borderBottomWidth: 1,
    paddingTop: 2,
    paddingBottom: 2,
    // backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    // borderColor: "#ddd",
    position: "relative"
  }
};
