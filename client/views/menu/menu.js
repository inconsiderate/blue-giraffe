
Template.menu.helpers({
	flavours: function() {
		return Flavours.find();
	},
	menuPage: function() {
		return PhotoAssets.findOne({
			location: 'menuPage'
		})
	}
});

Template.menu.onRendered(function() {
    changeMenuTabs('#nav-menu');
});