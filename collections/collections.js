Rooms = new Meteor.Collection('rooms');

Rooms.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Visitors = new Meteor.Collection('visitors');

Visitors.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
})

Visities = new Meteor.Collection('visities');

Visities.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
})
