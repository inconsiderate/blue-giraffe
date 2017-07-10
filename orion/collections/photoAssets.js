PhotoAssets = new orion.collection('photoAssets', {
    singularName: 'Photo Asset', // The name of one of this items
    pluralName: 'Photo Assets', // The name of more than one of this items
    title: 'Photo Assets', // The title of the page
    link: {
        title: 'Photo Assets'
    },
    /**
    * Tabular settings for this collection
    */
    tabular: {
        columns: [
            { data: 'location', title: 'Page Location' },
            orion.attributeColumn('image', 'photo', 'Photo'),
        ]
    }
});

PhotoAssets.attachSchema(new SimpleSchema({
    location: {
        type: String,
        label: "Page Location",
        unique: true,
        autoform: {
            afFieldInput: {
                type: "select-radio",
                options: function () {
                    return { homePageImage: 'Home Page', menuPageImage: 'Top of Menu Page', imageMissingImage: 'Image Missing'};
                }
            }
        }
    },
    photo: orion.attribute('image', {
        label: 'Photo',
        optional: true
    }),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));