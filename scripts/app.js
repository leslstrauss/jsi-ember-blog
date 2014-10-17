var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

console.log('welcome to leslie world');

var posts = [{
  title: "First Entry",
  body: "It rained today."
}, {
  title: "Second Entry",
  body: "It rained yesterday."
}];

App.Router.map(function() {
  this.route('post1'); // TODO: this needs to be generalized to handle any post
  this.route('create-post');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

// TODO: this also needs to be generalized to handle any post
App.Post1Route = Ember.Route.extend({
  model: function() {
    return posts[0];
  }
});

App.CreatePostController = Ember.ObjectController.extend({
  actions: {
    createPost: function(create) {
      // this needs to update stuff properly. it will be somehow
      // related to the concept of computed properties, but maybe
      // not quite in the way that you think.
      alert("New Post Created.");
    },
    cancelCreatePost: function() {
      alert("Canceled New Post.");
    }
  }
});
