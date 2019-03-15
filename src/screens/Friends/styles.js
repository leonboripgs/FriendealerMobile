const React = require("react-native");
const { Platform, Dimensions } = React;

const lightTextColor = require("../../theme/variables/commonColor")
  .lightTextColor;

const deviceHeight = Dimensions.get("window").height;

export default {
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },

  requestContainerOneView: {
    backgroundColor: "#fff",

    height: deviceHeight / 8,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  requestContainerTwoView: {
    backgroundColor: "#fff"
  },
  requestContainerTwoText: {
    color: lightTextColor,

    padding: 10,
    paddingBottom: 0
  },
  requestContainerInnerView: {
    flexDirection: "row"
  },
  nameText: {
    fontSize: 15,
    marginBottom: 2
  },
  noOfMutualFriendsText: {
    color: lightTextColor
  },
  actionButtonsBlock: {
    flexDirection: "row",
    marginTop: 5
  }
};
