const React = require("react-native");
const { Platform, PixelRatio } = React;

const commonColor = require("../../theme/variables/commonColor");

export default {
  sidebarIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30
  },
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  searchContainerView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 8
  },
  searchView: {
    flex: 2,
    borderRightWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderRightColor: "rgba(0,0,0,0.1)"
  },
  searchIcon: {
    fontSize: 25,
    color: commonColor.lightTextColor,
    marginLeft: 10,
    marginTop: 5
  },
  inviteBtnView: {
    flex: 1
  },
  inviteIcon: {
    color: commonColor.brandPrimary,
    fontSize: 30,
    marginTop: 10
  },
  inviteBtnText: {
    color: commonColor.brandPrimary,
    fontSize: 17,
    marginLeft: 10,
    marginTop: 10
  },
  userContainerView: {
    backgroundColor: "#fff",
    marginBottom: 8
  },
  menuHeaderText: {
    color: commonColor.lightTextColor,
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10
  },
  userNameText: {
    fontSize: 15,
    marginLeft: 0,
    marginBottom: 5,
    fontWeight: "bold"
  },
  locationText: {
    fontSize: 12,
    color: commonColor.lightTextColor,
    marginLeft: 0
  },
  switch: {
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }]
  },
  distanceText: {
    fontSize: 10,
    color: commonColor.lightTextColor,
    marginLeft: 0
  },
  seeMoreBtn: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.1)"
  }
};
