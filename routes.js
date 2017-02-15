FlowRouter.route('/', {
  action: function(){
    FlowRouter.go('/home')
  }
})

FlowRouter.route('/home', {
  action: function(){
    BlazeLayout.render("index");
  }
})


FlowRouter.route('/visitors', {
  action: function(){
    BlazeLayout.render("visitors");
  }
})


FlowRouter.route('/login', {
  action: function(){
    BlazeLayout.render("login");
  }
})
