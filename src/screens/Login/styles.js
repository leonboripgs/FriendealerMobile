const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const commonColor = require("../../theme/variables/commonColor");

export default {
  backgroundContainer: {
    backgroundColor: "#fff"
  },
  logoContainerView: {
    height: deviceHeight / 4,
    backgroundColor: '#FFF'
  },
  imageShadow: {
    width: deviceWidth / 5,
    height: deviceWidth / 5,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: deviceHeight / 12
  },
  formContainerView: {
    height: deviceHeight / 2,
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 10,
    paddingRight: 10
  },
  formView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  inputGrp: {
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: "row"
  },
  formErrorIcon: {
    color: "#000",
    marginTop: 5,
    right: 10
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: "right"
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right"
  },
  loginBtn: {
    backgroundColor: "#4E69A2",
    borderRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: 15,
    marginBottom: 5
  },
  forgotPasswordText: {
    fontSize: 15,
    fontWeight: "bold",
    color: commonColor.lightTextColor
  },
  footerView: {
    flex: 1,
    height: deviceHeight / 5
  },
  createAccountBtn: {
    alignSelf: "center",
    borderRadius: 0,
    bottom: 0,
    borderColor: commonColor.lightTextColor,
    position: "absolute"
  },
  createAccountBtnTxt: {
    color: commonColor.lightTextColor,
    fontWeight: "bold",
    fontSize: 14
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
};
