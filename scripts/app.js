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
  actions: {
    createUser: function(user) {
      ........
    },
    cancelUserCreation: function() {
      .......
    }
  }

});

App.UserFormComponent = Ember.Component.extend 


//   actions: {
//     submitPost: function() {
//       this.sendAction{'submit',
//       {
//         title: this.get('title'),
//         body: this.get('body')
//       });
//     },

//   }
// });

