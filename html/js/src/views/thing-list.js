this.ThingListView = Backbone.View.extend({

  tagName: "ul",
  
  className: "things",
  
  // Delegated event for creating new items
   events: {
     "keypress #new-thing":  "createOnEnter"
   },
   
  initialize: function() {
    
    // This is the main input field for any new things the user wants to add.
    this.input = this.$("#new-thing");
    
    // We need to bind all the view methods, because that's what backbone expects us to do.
    _.bindAll(this, "render", "addThing", "createOnEnter");
    
    if (this.collection) {  // This check is a frig because I'm avoiding re-writing the tests.
    
      // this.collection.bind('add', this.addOne, this);
      this.collection.bind('all', this.render, this);

    }
    
  },

  render: function() {

    console.log("ThingListView.render");

    // console.log(this.$("#things-list").html);

    // Clear our list before adding all our things.
    // this.$("#things-list").html("");

    // Render every thing from our collection.
    this.collection.each(this.addThing);

    // A good convention is to return this at the end of render to enable chained calls. 
    return this;  

  },
  
  // Add a single thing to the list by creating a view for it, and
  // appending its element to the `<ul>`.
  addOne: function(thing) {
    
    console.log("ThingListView.addOne");
    
    var view = new ThingView({model: thing});
    
    this.$("#thing-list").append(view.render().el);
    
  },
  
  // If you hit return in the main input field, and there is text to save,
  // create new **Thing** model.
  createOnEnter: function(e) {
    
    var text,
        newThing;
    
    // Get the value of the new thing input box.
    text = this.input.val();
    
    // Ignore any key that isn't carriage return.
    if (!text || e.keyCode != 13) return;
    
    // Create a new thing.
    newThing = this.collection.create({name: text});
    
    this.addThing(newThing);
    
    // Clear the new thing input box.
    this.input.val('');
    
  },
  
  addThing: function(thing) {
    
    console.log("ThingListView.addThing");
    
    thingTemplate = 
            '<h2>{{name}}</h2>' +
            '<input class="edit" type="text" ' +
            'value="{{name}}" style="display:none"/>' + 
           '<a href="#" class="edit">Edit</a>';
           
    var view = new ThingView({model: thing, template: thingTemplate});
    // var view = new ThingView({model: thing});
    
    var thingEl = view.render().el;
    
    $(this.el).append(thingEl);
    
    // this.$("#things-list").append(thingEl);
    
  }

});