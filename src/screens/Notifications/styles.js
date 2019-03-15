const React = require("react-native");
const { Platform } = React;

const lightTextColor = require("../../theme/variables/commonColor")
  .lightTextColor;

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
  listItem: {
    paddingVertical: 0,
    marginLeft: 0,
    paddingLeft: 17
  },
  nameText: {
    marginBottom: 5
  },
  timeText: {
    fontSize: 13,
    color: lightTextColor
  }
};
