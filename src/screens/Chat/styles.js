const React = require("react-native");
const { Dimensions, Platform } = React;

const lightTextColor = require("../../theme/variables/commonColor")
  .lightTextColor;
const deviceHeight = Dimensions.get("window").height;

export default {
  headerIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30
  },
  content: {
    backgroundColor: "#fff",
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  userNameText: {
    fontSize: 15,
    marginBottom: 5
  },
  messageText: {
    color: lightTextColor
  },
  timeText: {
    fontSize: 10
  },
  contentChatView: {
    flex: 1,
    backgroundColor: "#fff",
    height: deviceHeight
  },
  chatFooterView: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  chatFooterText: {
    fontSize: 14,
    color: "#aaa"
  }
};
