this.ThingListView = Backbone.View.extend({

    tagName: "ul",
    
    className: "things",

    initialize: function() {
        this.$things = this.$("#things-list");
        // this.$input = this.$("#new-thing");
        _.bindAll(this, "render", "addThing");
        if (this.collection) {  // This check is a frig because I'm avoiding re-writing the tests.
            this.collection.bind("reset", this.render);
            this.collection.bind("add", this.render);
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
    }

});