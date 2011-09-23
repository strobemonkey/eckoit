this.AppRouter = Backbone.Router.extend({
  
  routes: {
    "":            "index",  // #index
    "things/:id":  "thing"   // e.g. #things/123
  },
  
  index: function() {
    console.log("AppRouter.index");
    this.things = new Things();
    this.thingsView = new ThingListView({
      collection: this.things
    });
    this.things.fetch();
  },
  
  thing: function(id) {}
  
});
