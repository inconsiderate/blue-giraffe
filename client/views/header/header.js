Template.header.events({
});

Template.header.onRendered(function() {
    $('.ui.sticky').sticky({
        context: '#fullpage'
    });

    $('.ui.sticky').visibility({
        type: 'fixed',
    });
});