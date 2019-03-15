import {width, height} from 'react-native-dimension';

export default {
  infoBlockView: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center"
  },
  header_text: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  bottom_but: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    backgroundColor: '#505362',
    width: width(100)
  },
  white_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 12
  },
  membership_content: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  },
  full_height: {
    height: height(88)    
  },
  plan_but: {
    marginTop: 8,
    backgroundColor: "#2874F0",
    alignItems: 'center',
  },
  sidebarIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30
  },
};
