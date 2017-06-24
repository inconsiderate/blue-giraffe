
Meteor.publish('flavours', function () {
	return Flavours.find({});
});

Meteor.publish('shortEvents', function () {
	return SEvents.find({});
});

Meteor.publish('longEvents', function () {
	return LEvents.find({});
});

Meteor.publish('photos', function () {
	return Photos.find({});
});

Meteor.publish('photoAssets', function () {
	return PhotoAssets.find({});
});
