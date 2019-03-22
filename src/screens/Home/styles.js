const React = require("react-native");
const { Dimensions, Platform } = React;

const commonColor = require("../../theme/variables/commonColor");
const deviceWidth = Dimensions.get("window").width;

export default {
  headerIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30
  },
  headerBtn: {
    alignSelf: "center",
    marginLeft: 10
  },
  sidebarIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30
  },
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  detailsBlockView: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderBottomWidth: 10,
    borderTopWidth: 10,
    borderColor: "#DDDEE3"
  },
  whatsOnMindView: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingBottom: 10
  },
  nameText: {
    color: commonColor.lightTextColor,
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10
  },
  navLinksView: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  navLinkBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  navLinkIcons: {
    height: 17,
    width: 17,
    alignSelf: "center",
    resizeMode: "contain"
  },
  navLinkText: {
    marginLeft: 6,
    color: commonColor.lightTextColor,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  listViewBlock: {
    backgroundColor: "#DDDEE3"
  },
  thumbnail: {
    height: 40,
    width: 40
  },
  userNameText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3
  },
  timeText: {
    fontSize: 12,
    color: commonColor.lightTextColor
  },
  globeIcon: {
    resizeMode: "contain",
    height: 13,
    width: 13,
    marginLeft: 5,
    marginTop: 1
  },
  postContentText: {
    color: commonColor.contentTextColor,
    lineHeight: Platform.OS === "ios" ? 20 : 22
  },
  cardFooterIcons: {
    fontSize: 20,
    color: commonColor.lightTextColor
  },
  cardFooterText: {
    color: commonColor.lightTextColor,
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 5
  },
  activeIcon: {
    color: commonColor.brandPrimary
  },
  rowHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center"
  },
  col: {
    height: 50,
    width: deviceWidth / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  topOptions: {
    color: "#484D51",
    marginTop: 10
  },
  topIcons: {
    color: "#484D51"
  },
  searchInputGroup: {
    flex: 1,
    height: 40,
    backgroundColor: "#293E6B",
    borderRadius: 8,
    borderBottomWidth: 0,
    paddingLeft: 15,
    paddingRight: 15
  },
  searchIcon: {
    fontSize: 20
  },
  inputBox: {
    height: 40
  },
  contentView: {
    backgroundColor: "#D3D6DB",
    flex: 1
  }
};
