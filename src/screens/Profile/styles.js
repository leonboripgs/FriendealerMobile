const React = require("react-native");
const { Dimensions, Platform, PixelRatio } = React;

const commonColor = require("../../theme/variables/commonColor");
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  headerBtn: {
    paddingLeft: 0,
    paddingRight: 5
  },
  headerIcon: {
    lineHeight: 30,
    fontSize: 27
  },
  coverBlock: {
    height: deviceHeight / 4,
    width: deviceWidth
  },
  coverImage: {
    flex: 1
  },

  profileImgInnerView: {
    position: "absolute",
    top: -(deviceWidth / 6),
    left: deviceWidth / 3,
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#fff"
  },
  profileImg: {
    height: deviceWidth / 3 - 10,
    width: deviceWidth / 3 - 10
  },
  profileImgEditView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 25,
    width: 60,
    backgroundColor: "rgba(206,208,203,0.8)",
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 3
  },
  editCamIcon: {
    marginRight: 5,
    fontSize: 20
  },
  profileNameContainerView: {
    marginTop: deviceWidth / 6 + 5,
    paddingBottom: 15
  },
  userNameText: {
    fontSize: 18,

    color: commonColor.lightTextColor,
    alignSelf: "center"
  },
  pendingPostText: {
    fontSize: 13,
    color: "#658ECE",
    alignSelf: "center",
    paddingTop: 10
  },
  optionsContainerView: {
    padding: 15,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",

    borderTopWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderTopColor: "#F3F3F3",
    borderBottomColor: "#F3F3F3"
  },
  optionBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
  },
  optionImg: {
    height: 20,
    width: 20,
    resizeMode: "contain"
  },
  optionText: {
    color: "#2020ff",
    padding: 4,
    fontSize: 13
  },
  introBtnBlock: {
    padding: 15,
    paddingRight: 25,
    paddingLeft: 25,
    flexDirection: "row"
  },
  introBtn: {
    borderColor: "#658ECE"
  },
  introText: {
    color: "#658ECE",
    fontSize: 16,
    fontWeight: "bold"
  },
  infoContainerView: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: Platform.OS === "ios" ? 25 : 50
  },
  infoBlockView: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center"
  },
  infoIcon: {
    height: 20,
    width: 20,
    marginTop: 2,
    alignSelf: "center",
    resizeMode: "contain"
  },
  infoIconSmall: {
    height: 15,
    width: 15,
    marginLeft: 5,
    marginTop: 1,
    resizeMode: "contain"
  },
  infoText: {
    color: "#555",
    marginLeft: 15
  },
  nameContainerView: {
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "relative"
  },
  userName2Text: {
    color: "rgba(0,0,0,0.7)",
    marginLeft: 10,

    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3
  },
  timeText: {
    fontSize: 12,
    color: commonColor.lightTextColor,
    marginLeft: 10
  },
  fullWidthImgContainerView: {
    height: 300,
    backgroundColor: "#ccc"
  },
  fullWidthImg: {
    height: 300,
    width: null,
    flex: 1,
    resizeMode: "cover"
  },
  commentContainerView: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderBottomColor: "rgba(0,0,0,0.2)"
  },
  thumbIcon: {
    color: commonColor.brandPrimary,
    fontSize: 23
  },
  commentContainerLeftText: {
    marginLeft: 10,
    fontSize: 13,
    color: commonColor.contentTextColor
  },
  commentContainerRightText: {
    color: commonColor.contentTextColor,
    marginTop: 15,
    marginLeft: 10,
    fontSize: 13
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
  footerText: {
    color: "#505362"
  },
  reviewBlockView: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa'
  },
  feedback_text: {
    fontStyle: 'italic',
    fontSize: 15,
    marginBottom: 6
  },
  rating_num: {
    color: 'white',
    backgroundColor: 'orange',
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
    marginRight: 24,
    borderRadius: 4
  },
  headline_text: {
    color: "#333",
    fontSize: 15,
    marginLeft: 15
  },
  description_text: {
    color: "#333",
    fontSize: 14,
    marginLeft: 15
  },
  sidebarIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30
  },
};
