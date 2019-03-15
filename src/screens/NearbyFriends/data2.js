const brandInfo = require("../../theme/variables/commonColor").brandInfo;

const sauravImg = require("../../../assets/contacts/saurav.png");
const varunImg = require("../../../assets/contacts/varun.png");

const data2 = [
  {
    name: "Saurav",
    thumbnail: sauravImg,
    location: "Mysore",
    distance: "180km away",
    iconColor: brandInfo
  },
  {
    name: "Varun",
    thumbnail: varunImg,
    location: "Madikeri",
    distance: "200km away",
    iconColor: "#95969B"
  }
];

module.exports = data2;
