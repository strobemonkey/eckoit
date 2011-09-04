this.Thing = Backbone.Model.extend({
  defaults: {
    name: "no name"
  },
  url: function() {
    return "/things/" + this.id;
  },
  validate: function(attrs) {
    if (!attrs.name) {
      return "cannot have an empty name";
    }
  }
});