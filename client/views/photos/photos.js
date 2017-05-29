
Template.photos.helpers({
	pics: function() {
		return Photos.find();
	},
});

Template.photos.onRendered(function() {
    changeMenuTabs('#nav-photos');
});