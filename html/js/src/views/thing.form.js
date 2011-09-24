this.ThingFormView = Backbone.View.extend({
    
    el: "#create-thing",
    
    events: {
        "keypress #new-thing":  "createOnEnter"
    },
    
    initialize: function(options) {
        this.collection = options.collection;   // the collection needs to be passed in so we can add to it
        this.model = new Thing();
        this.template = $('#thing-form-template').html();
        _.bindAll(this, "render", "createOnEnter");
        this.render();
    },

    render: function() {
        $(this.el).html(Mustache.to_html(this.template, this.model.toJSON()));
        return this;
    },

    // If you hit return in the main input field, and there is text to save,
    // create new **Thing** model.
    createOnEnter: function(e) {
        var text,
            newThing;

        text = this.$("#new-thing").val();
        if (!text || e.keyCode != 13) return;
        newThing = this.collection.create({name: text});
        this.$("#new-thing").val('');
    },
    
});