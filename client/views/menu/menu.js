
Template.menu.helpers({
	flavours: function() {
		return Flavours.find();
	},
});

Template.menu.onRendered(function() {
    changeMenuTabs('#nav-menu');
});