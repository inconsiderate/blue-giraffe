LEvents.attachSchema(new SimpleSchema({
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
    footNote: {
        type: Boolean,
        label: 'Show asterix for Footnote',
        optional: true
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

