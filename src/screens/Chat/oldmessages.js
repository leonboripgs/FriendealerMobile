module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Thanks",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer"
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "The Food Yesterday was great..",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Mike"
    }
  }
];
