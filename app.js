var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('posts', function() {
    this.route('post1');
  });
});

App.Post1Route = Ember.Route.extend({
  model: function() {
    return {
      title: "First Entry",
      body: "Today, I finally fell in love with my wife."
    };
  }
});

