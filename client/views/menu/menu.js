
Template.menu.helpers({
	flavours: function() {
		return Flavours.find();
	},
	menuPageImage: function() {
		return PhotoAssets.findOne({location: 'menuPageImage'});
	},
	imageMissingImage: function() {
		return PhotoAssets.findOne({location: 'imageMissingImage'});
	}
});

Template.menu.onRendered(function() {
    changeMenuTabs('#nav-menu');
});