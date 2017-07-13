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
        label: 'Photo - remember to scale these images down so they load faster! Arouns 800px wide is probably good.',
        optional: true
    }),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

