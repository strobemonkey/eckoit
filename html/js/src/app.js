$(function(){
  // Fill this with your database information.
  // `ddocName` is the name of your reupholster design document.
  Backbone.couch_connector.config.db_name = "ecko-it";
  Backbone.couch_connector.config.ddoc_name = "app2";
  
  // If set to true, the connector will listen to the changes feed
  // and will provide your models with real time remote updates.
  // But in this case we enable the changes feed for each Collection on our own.
  Backbone.couch_connector.config.global_changes = true;
  
  var things = new Things();
  
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