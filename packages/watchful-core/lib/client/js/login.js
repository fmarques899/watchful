Template.login.events({
  'click #login-button': function(event){
    event.preventDefault();
    var username = $("#login-username").val()
    var password = $("#login-password").val()
    Meteor.loginWithPassword(username, password);
    FlowRouter.go('/')

  },
  'submit #login-form': function(event){
    event.preventDefault();
    var username = $("#login-username").val()
    var password = $("#login-password").val()
    Meteor.loginWithPassword(username, password);
    FlowRouter.go('/')
  }
})
