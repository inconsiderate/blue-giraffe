
Photos = new orion.collection('photos', {
    singularName: 'Event Photo', // The name of one of this items
    pluralName: 'Event Photos', // The name of more than one of this items
    title: 'Event Photos', // The title of the page
    link: {
        /**
        * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
        */
        title: 'Event Photos'
    },
    /**
    * Tabular settings for this collection
    */
    tabular: {
        columns: [
            { data: 'title', title: 'Title' },
            { data: 'description', title: 'Description' },
            orion.attributeColumn('image', 'photo', 'Photo'),
        ]
    }
});