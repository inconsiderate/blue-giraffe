 Photos.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    description: {
        type: String,
        label: 'Description',
        optional: true
    },
    photo: orion.attribute('image', {
        label: 'Photo',
        optional: true
    }),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

