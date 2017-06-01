Template.locations.onRendered(function() {
    changeMenuTabs('#nav-locations');
});

Template.locations.helpers({
	permEvents: function() {
		return Events.find({
			duration: { $in: ['perm'] }
		});
	},
	tempEvents: function() {
		return Events.find({
			duration: { $in: ['temp'] }
		});
	},

	formatDate: function() {
		return moment(this.date).format('MMMM Do YYYY');
	},
})