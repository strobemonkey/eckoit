this.ThingListView = Backbone.View.extend({

    el: $("#things"),

    tagName: "ul",

    className: "things",

    // Delegated event for creating new items
    events: {
        "keypress #new-thing":  "createOnEnter"
    },

    initialize: function() {
        
        this.$things = this.$("#things-list");
        this.$input = this.$("#new-thing");
        _.bindAll(this, "render", "addThing", "createOnEnter");
        if (this.collection) {  // This check is a frig because I'm avoiding re-writing the tests.
            this.collection.bind("reset", this.render);
        }
        
    },

    render: function() {
        
        this.$things.html("");
        this.collection.each(this.addThing);
        return this;  
        
    },

    // Add a single thing to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addThing: function(thing) {
        
        var view = new ThingView({model: thing});
        var rendered = view.render().el;
        this.$things.append(rendered);
        
    },

    // If you hit return in the main input field, and there is text to save,
    // create new **Thing** model.
    createOnEnter: function(e) {

        var text,
            newThing;

        text = this.$input.val();
        if (!text || e.keyCode != 13) return;

        newThing = this.collection.create({name: text});

        this.addThing(newThing);

        this.$input.val('');

    },

});