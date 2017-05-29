Events.attachSchema(new SimpleSchema({
    location: {
        type: String,
        label: 'Location',
        optional: true
    },
    date: {
      type: Date,
      optional: true,
      label: 'Date',
      min: new Date(),
      autoform: {
         value: new Date()
      }
    },
    time: {
        type: String,
        label: 'Time',
        optional: true
    },
    duration: {
        type: [String],
        label: "Duration",
        autoform: {
            afFieldInput: {
                type: "select-checkbox-inline",
                options: function () {
                    return { perm: 'perm', temp: 'temp'};
                }
            }
        }
    },

    footNote: {
        type: Boolean,
        label: 'Show Footnote',
        optional: true
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

