const brandWarning = require("../../theme/variables/commonColor").brandWarning;

const pratikImg = require("../../../assets/contacts/pratik.png");
const meghaImg = require("../../../assets/contacts/megha.png");
const atulImg = require("../../../assets/contacts/atul.png");

const data1 = [
  {
    name: "Kumar Pratik",
    thumbnail: pratikImg,
    location: "BTM 2nd Stage",
    distance: "0.5km away, 5 minutes ago",
    iconColor: brandWarning
  },
  {
    name: "Megha Kumari",
    thumbnail: meghaImg,
    location: "Banerghatta",
    distance: "1km away, 15 minutes ago",
    iconColor: "#95969B"
  },
  {
    name: "Atul Ranjan",
    thumbnail: atulImg,
    location: "JP Nagar, Phase 3",
    distance: "0.75km away, 10 minutes ago",
    iconColor: "#95969B"
  }
];

module.exports = data1;
