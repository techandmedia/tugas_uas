import React from "react";
import { View } from "react-native";

const Card = props => {
  // return <View>{props.children}</View>;
  return <View style={styles.container}>{props.children}</View>;
};

export default Card;

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 2,
    backgroundColor: "#404040",
    // backgroundColor: "#fff",404040
    // borderColor: "#yellow",
    borderColor: "#ddd",
    // borderBottomWidth: 0,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    marginLeft: 10,
    marginRight: 10,
  }
};
