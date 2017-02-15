Meteor.publish("allVisitorsList", function(){
  return Visitors.find({});
})
