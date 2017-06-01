
Router.configure({
	layoutTemplate: 'layout',
    onAfterAction: function() {

        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
              $('#footer').addClass('showFooter');
            } else {
              $('#footer').removeClass('showFooter');
            }
        };
    },
});

Router.route('/', {
    action: function() {
        this.render('landingPage', {to: 'content'});
    }
});

Router.route('/menu', {
    waitOn: function () {
        return Meteor.subscribe('flavours');
    },
    action: function() {
        this.render('menu', {to: 'content'});
    }
});

Router.route('/ourStory', {
    action: function() {
        this.render('ourStory', {to: 'content'});
    }
});

Router.route('/locations', {
    waitOn: function () {
        return Meteor.subscribe('events');
    },
    action: function() {
        this.render('locations', {to: 'content'});
    }
});

Router.route('/events', {
    action: function() {
        this.render('cateredEvents', {to: 'content'});
    }
});

Router.route('/photos', {
    waitOn: function () {
        return Meteor.subscribe('photos');
    },
    action: function() {
        this.render('photos', {to: 'content'});
    }
});

