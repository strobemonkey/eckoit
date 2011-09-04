$(function(){
  // Fill this with your database information.
  // `ddocName` is the name of your couchapp project.
  Backbone.couch_connector.config.db_name = "ecko-it";
  Backbone.couch_connector.config.ddoc_name = "queries";
  
  // If set to true, the connector will listen to the changes feed
  // and will provide your models with real time remote updates.
  // But in this case we enable the changes feed for each Collection on our own.
  Backbone.couch_connector.config.global_changes = false;
  
  // Create our things, injecting CouchDB specific config
  var things = new Things({
    db : {
      view : "things",
      changes : true,
      filter : Backbone.couch_connector.config.ddoc_name + "/things-filter"
    }
  });
  
  // This is our App object.
	var App = {
      Views: {},
      Controllers: {},
      init: function() {
        console.log("App.init");
        new AppRouter();
        Backbone.history.start();
      }
  };

	App.init();
});