const React = require("react-native");
const { Platform, PixelRatio } = React;

const lightTextColor = require("../../theme/variables/commonColor")
  .lightTextColor;

export default {
  headerBtnText: {
    color: "#fff",
    fontSize: 17
  },
  content: {
    backgroundColor: "#F8F8F8",
    marginBottom: Platform.OS === "ios" ? -50 : undefined
  },
  nameContainerLink: {
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "relative"
  },
  userNameText: {
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold"
  },
  profileVisibilityText: {
    fontSize: 15,
    color: lightTextColor,
    marginLeft: 10
  },
  textareaView: {
    marginHorizontal: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderBottomColor: "#C8C7CC"
  },
  textarea: {
    height: 160,
    borderWidth: 1,
    borderColor: "#C8C7CC",
    padding: 5,
    marginBottom: 10,
    fontSize: 20,
    color: "rgba(0,0,0,0.5)",
    textAlignVertical: "top"
  },
  optionsView: {
    backgroundColor: "#fff",
    paddingTop: 5,
    paddingBottom: 70
  },
  optionIcon: {
    fontSize: 30,

    paddingLeft: 3
  },
  optionText: {
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 1
  }
};
