Meteor.subscribe("allVisitorsList", Meteor.user());
var registerVisitor = function(visitor){
  Visitors.insert(visitor);
}
Template.visitors.events({
  'click #sidebar-wrapper': function(){
      $("#wrapper").toggleClass("toggled");
      // $('page-content-wrapper').html(<span>Testando</span>)
  },

  'click #menu-toggle': function(){
      $("#wrapper").toggleClass("toggled");
  },

  'click #register-visitor-button': function(){
    var visitor = {};
    visitor.name = $('#visitor_name').val();
    visitor.cpf = $('#visitor_cpf').val();
    visitor.rg = $('#visitor_cpf').val();
    visitor.emitter =  $('#visitor_emitter').val()
    visitor.birthdate =  $('#visitor_birthdate').val()

    registerVisitor(visitor);
  }
})

Template.visitors.helpers({
  getRooms: function(){
    return Rooms.find();
  },
  getVisitors: function(){
    console.log(Visitors.find({}).count());
    return Visitors.find({});
  }
})
