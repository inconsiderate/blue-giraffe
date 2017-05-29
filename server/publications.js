
Meteor.publish('flavours', function () {
	return Flavours.find({});
});

Meteor.publish('events', function () {
	return Events.find({});
});

Meteor.publish('photos', function () {
	return Photos.find({});
});
