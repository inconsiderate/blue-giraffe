Flavours.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    description: {
        type: String,
        label: 'Description',
    },
    photo: orion.attribute('image', {
        label: 'Photo',
        optional: true
    }),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

