
Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
    onAfterAction: function() {
        $('.ui.sticky').sticky({
            context: '#fullpage'
        });

        $('.ui.sticky.menubar').visibility({
            type: 'fixed',
        });

        $('.contactbutton').click(function() {
            $('html, body').animate({
                scrollTop: $("#footer").offset().top - 140
            });
        });

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
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('landingPage', {to: 'content'});
    }
});

Router.route('/menu', {
    waitOn: function () {
        return Meteor.subscribe('flavours');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('menu', {to: 'content'});
    }
});

Router.route('/ourStory', {
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('ourStory', {to: 'content'});
    }
});

Router.route('/locations', {
    waitOn: function () {
        return Meteor.subscribe('events');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('locations', {to: 'content'});
    }
});

Router.route('/events', {
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('cateredEvents', {to: 'content'});
    }
});

Router.route('/photos', {
    waitOn: function () {
        return Meteor.subscribe('photos');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('photos', {to: 'content'});
    }
});

