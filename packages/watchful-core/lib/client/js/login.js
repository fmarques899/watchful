Template.login.events({
  'click #login-button': function(){
    var username = $("#login-username").val()
    var password = $("#login-password").val()

    Meteor.loginWithPassword(username, password);
  }
})
