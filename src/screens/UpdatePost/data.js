const brandSuccess = require("../../theme/variables/commonColor").brandSuccess;
const brandDanger = require("../../theme/variables/commonColor").brandDanger;
const brandWarning = require("../../theme/variables/commonColor").brandWarning;
const brandInfo = require("../../theme/variables/commonColor").brandInfo;

const data = [
  {
    icon: "ios-camera-outline",
    iconColor: brandSuccess,
    text: "Photo/Video/Screenshot"
  },
  {
    icon: "ios-videocam-outline",
    iconColor: brandDanger,
    text: "Go Live"
  },
  {
    icon: "ios-pin-outline",
    iconColor: "#008b8b",
    text: "Check In"
  },
  {
    icon: "ios-happy-outline",
    iconColor: brandWarning,
    text: "Feeling/Activity/Sticker"
  },
  {
    icon: "ios-film-outline",
    iconColor: "#e0b0ff",
    text: "Slideshow"
  },
  {
    icon: "ios-flag-outline",
    iconColor: "#ff69b4",
    text: "Life Event"
  },
  {
    icon: "ios-people-outline",
    iconColor: brandInfo,
    text: "Tag Friends"
  }
];

module.exports = data;
