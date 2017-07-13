
Template.photos.helpers({
	pics: function() {
		return Photos.find({}, {sort: { createdAt: -1 }});
	},
});

Template.photos.onRendered(function() {
    changeMenuTabs('#nav-photos');
});