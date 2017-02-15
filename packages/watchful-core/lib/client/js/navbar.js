Template.navbar.events({

  'click #login-button': function(){
    FlowRouter.go('/login', {});
  },

  'click #logout-button':function(){
    Meteor.logout();
  }
})
