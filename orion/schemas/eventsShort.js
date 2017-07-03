SEvents.attachSchema(new SimpleSchema({
    location: {
        type: String,
        label: 'Location',
        optional: true
    },
    date: {
      type: Date,
      optional: true,
      label: 'Date',
      autoValue: function() {
        var momentDate = moment(this.value);
        return momentDate.add(9, 'hours').toDate();
      }
    },
    time: {
        type: String,
        label: 'Time',
        optional: true
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

