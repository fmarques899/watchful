Template.visitors.events({
  'click #sidebar-wrapper': function(){
      $("#wrapper").toggleClass("toggled");
      // $('page-content-wrapper').html(<span>Testando</span>)
  },

  'click #menu-toggle': function(){
      $("#wrapper").toggleClass("toggled");
  }
})
