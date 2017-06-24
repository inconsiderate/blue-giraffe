
Template.landingPage.helpers({
	landingImage: function() {
		return PhotoAssets.findOne({
			location: 'landingPage'
		})
	}
})