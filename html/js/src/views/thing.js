this.ThingView = Backbone.View.extend({
  
    tagName: "li",
  
    initialize: function(options) {

        _.bindAll(this, "render", "edit", "close", "updateOnEnter");
        this.model.bind('change', this.render);
        this.template = $('#thing-template').html();

    },
  
    render: function() {
        $(this.el).html(Mustache.to_html(this.template, this.model.toJSON()));
        return this;
    },

    events: {
        "click a.edit":   "edit",
        "keypress input": "updateOnEnter"
    },

    edit: function() {
        this.$('h2').fadeOut(500);
        this.$('input.edit').fadeIn(500);
    },
  
    // Close the `"editing"` mode, saving changes to the thing.
    close: function() {
        this.model.save( { name: this.$('input.edit').val() } );
        $(this.el).removeClass("editing");
    },
  
    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
        if (e.keyCode == 13) this.close();
    }
  
});