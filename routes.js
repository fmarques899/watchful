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
