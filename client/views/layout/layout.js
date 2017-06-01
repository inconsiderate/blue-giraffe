Template.layout.onRendered(function() {
    $('.ui.sticky').sticky({
        context: '.pusher'
    });

    $('.ui.sticky').visibility({
        type: 'fixed',
    });

});