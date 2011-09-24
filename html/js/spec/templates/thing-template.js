beforeEach(function() {
  this.templates = _.extend(this.templates || {}, {
    thing: '<h2>{{name}}</h2><input class="edit xlarge" type="text" value="{{name}}" style="display:none"/>' +
      '<a href="#" class="edit">Edit</a>'
  });
});

