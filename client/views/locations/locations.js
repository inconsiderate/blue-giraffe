Template.locations.onRendered(function() {
    changeMenuTabs('#nav-locations');
});

Template.locations.helpers({
	longEvents: function() {
		return LEvents.find({}, {sort: { date: 1 }});
	},
	shortEvents: function() {
		return SEvents.find({}, {sort: { date: 1 }});
	},

	formatDate: function() {
		return moment(this.date).format('MMMM Do YYYY');
	},
})