
Template.landingPage.helpers({
	landingImage: function() {

		return PhotoAssets.findOne({location: 'homePageImage'});
	}
})