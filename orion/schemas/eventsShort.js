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
      // autoform: {
      //    value: new Date()
      // }
    },
    time: {
        type: String,
        label: 'Time',
        optional: true
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

