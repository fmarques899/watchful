Template.index.events({
  'click #sidebar-wrapper': function(){
      $("#wrapper").toggleClass("toggled");
  },

  'click #menu-toggle': function(){
      $("#wrapper").toggleClass("toggled");
  }
})

Template.index.helpers({
  getCurrentUserName: function(){
    return Meteor.user().username;
  }
})
