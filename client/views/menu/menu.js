
Template.menu.helpers({
	flavours: function() {

		return Flavours.find();
	},
	menuPageImage: function() {

		return PhotoAssets.findOne({location: 'menuPageImage'});
	}
});

Template.menu.onRendered(function() {
    changeMenuTabs('#nav-menu');
});