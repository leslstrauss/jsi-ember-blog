var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

console.log('welcome to leslie world');

App.Router.map(function() {
  this.route('newPost');
  this.route('post1');
});

App.Post1Route = Ember.Route.extend({
  model: function() {
    return {
      title: "First Entry",
      body: "Today, I finally fell in love with my wife."
    };
  }
});

App.NewPostController = Ember.ObjectController.extend({
  post: function(key, value) {
    if (arguments.length >1) {
      var post = value.split(/\s+/);
      this.set('title', postContents[0]);
      this.set('body', postContents[1]);
    }

  actions: {
    createPost: function(post) {
    return this.get('title') + "\n" + this.get('body')
    }.property('title', 'body')

    cancelCreatePost: function() {
      alert("Canceled New Post.");
    }
  }
});

App.NewPostComponent = Ember.Component.extend({
  actions: {
    submit: function() {
      this.sendAction('submit', {
        title: this.get('title'),
        body: this.get('body')
      });
    }
    cancel: function() {
      this.sendAction('cancel');
    }
  }
});

App.NewPostRoute = Ember.Route.extend({
  model: function(post) {
    return {
      title: this.get('title'),
      body: this.get('body')
    };
  }
});

