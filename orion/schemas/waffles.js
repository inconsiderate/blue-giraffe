Waffles.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    description: {
        type: String,
        label: 'Description',
    },
    photo: orion.attribute('image', {
        label: 'Photo - Upload only square images that are no bigger than 600px squared',
        optional: true
    }),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

