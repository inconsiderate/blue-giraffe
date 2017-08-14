
Template.menu.helpers({
	flavours: function() {
		return Flavours.find();
	},
	finalFeaturedItem: function() {
		return FinalFeaturedItem.find();
	},
	menuPageImage: function() {
		return PhotoAssets.findOne({location: 'menuPageImage'});
	},
	imageMissingImage: function() {
		return PhotoAssets.findOne({location: 'imageMissingImage'});
	},
	waffles: function() {
		return Waffles.find();
	}
});

Template.menu.onRendered(function() {
    changeMenuTabs('#nav-menu');
});