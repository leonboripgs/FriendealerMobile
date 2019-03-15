const React = require("react-native");
const { Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const commonColor = require("../../theme/variables/commonColor");

export default {
  background: {
    backgroundColor: "#fff"
  },
  logoContainerView: {
    height: deviceHeight / 4,
    backgroundColor: commonColor.brandPrimary
  },
  imageShadow: {
    width: deviceWidth / 7,
    height: deviceHeight / 7,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: deviceHeight / 15
  },
  formContainerView: {
    padding: 30,
    paddingTop: 20
  },
  inputGrp: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: commonColor.lightTextColor,
    marginBottom: 8
  },
  createBtn: {
    backgroundColor: "#4E69A2",
    borderRadius: 0,
    marginTop: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0
  },
  footerView: {
    flex: 1,
    height: deviceHeight / 10
    // paddingTop: deviceHeight < 600 ? 5 : Platform.OS === "android" ? 10 : 15,
  },
  signInBtn: {
    alignSelf: "center",
    borderRadius: 0,
    bottom: deviceHeight < 600 ? 0 : -10,
    borderColor: commonColor.lightTextColor,
    position: "absolute"
  },
  signInBtnText: {
    fontSize: 14,
    fontWeight: "bold"
  }
};
