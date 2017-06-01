Template.locations.onRendered(function() {
    changeMenuTabs('#nav-locations');
});

Template.locations.helpers({
	permEvents: function() {
		return Events.find({
			duration: { $in: ['perm'] }
		}, {sort: { date: 1 }});
	},
	tempEvents: function() {
		return Events.find({
			duration: { $in: ['temp'] }
		}, {sort: { date: 1 }});
	},

	formatDate: function() {
		return moment(this.date).format('MMMM Do YYYY');
	},
})