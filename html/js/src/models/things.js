this.Things = Backbone.Collection.extend({
    model: Thing,
    url: "/things",
    parse: function(res) {
      if (res.response !== undefined)
        return res.response.things;
      else
        return res;
    },
    comparator: function(thing) {
      return thing.get("name");
    }
});