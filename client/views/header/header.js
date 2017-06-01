Template.header.events({
	'click .huge.sidebar.icon': function() {
    	$('.ui.sidebar').sidebar('toggle');
	},
	'click .ui.sidebar': function() {
    	$('.ui.sidebar').sidebar('toggle');
	},
});


Template.header.onRendered(function() {
});