this.ThingListView = Backbone.View.extend({

  el: $("#things"),

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
    _.bindAll(this, "render", "addOne");
    
    if (this.collection) {  // This check is a frig because I'm avoiding re-writing the tests.
      // this.collection.bind('all', this.render, this);
      this.collection.bind("reset", this.render);
    }
    
  },

  render: function() {
      
    // Clear our list before adding all our things.
    this.$("#things-list").html("");
    
    // Render every thing from our collection.    
    this.collection.each(this.addOne);
    return this;  
  },
  
  // Add a single thing to the list by creating a view for it, and
  // appending its element to the `<ul>`.
  addOne: function(thing) {

    var view = new ThingView({model: thing});

    var rendered = view.render().el;

    this.$("#things-list").append(rendered);

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
  
    var view = new ThingView({model: thing});
    
    var thingEl = view.render().el;
    
    $(this.el).append(thingEl);
    
  }
   
});