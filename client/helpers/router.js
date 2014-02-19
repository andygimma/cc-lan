Meteor.Router.add({
  '/': {to: "index", as: "home"},
  '/signup': 'signUpForm',
  
  
  '/*': "404"
});

console.log("router");
