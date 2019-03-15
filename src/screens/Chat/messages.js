module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Great",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Mike"
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "I'm Fine What about you?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer"
    },
    sent: true,
    received: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "How are You?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Mike"
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Hi!!",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "Mike"
    }
  }
];
