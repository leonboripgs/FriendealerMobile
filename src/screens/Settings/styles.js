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
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  nameContainerBtn: {
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "relative",
    marginBottom: 12
  },
  nameContainerView: {
    marginTop: 8,
    marginLeft: 15
  },
  userNameText: {
    fontSize: 16,
    marginBottom: 3
  },
  viewProfileText: {
    color: lightTextColor
  },
  arrowForwardIcon: {
    color: lightTextColor,
    position: "absolute",
    right: 10,
    top: 30,
    fontSize: 22
  },

  settingsContainerView: {
    backgroundColor: "#fff"
  },
  iconContainerView: {
    height: 40,
    width: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  optionIcon: {
    fontSize: Platform.OS === "ios" ? 30 : 25,
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  }
};
