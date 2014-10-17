var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

console.log('welcome to leslie world');

App.Router.map(function() {
  this.route('newPost');
  this.route('post1');
  this.route('create-post', { path: "/components"});
});

App.Post1Route = Ember.Route.extend({
  model: function() {
    return {
      title: "First Entry",
      body: "It rained today."
    };
  }
});

App.CreatePostController = Ember.ObjectController.extend({
  actions: {
    createPost: function(create) {
      alert("New Post Created.");
    },
    cancelCreatePost: function() {
      alert("Canceled New Post.");
    }
  }
});

App.CreatePostComponent = Ember.Component.extend({
  actions: {
    submit: function() {
      this.sendAction('submit', {
        title: this.get('title'),
        body: this.get('body')
      });
    }
  }
});
