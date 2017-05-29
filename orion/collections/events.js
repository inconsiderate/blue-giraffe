Events = new orion.collection('events', {
    singularName: 'Event', // The name of one of this items
    pluralName: 'Events', // The name of more than one of this items
    title: 'Events', // The title of the page
    link: {
        /**
        * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
        */
        title: 'Events'
    },
    /**
    * Tabular settings for this collection
    */
    tabular: {
        columns: [
            { data: 'location', title: 'Location' },
            { data: 'date', title: 'Date' },
            { data: 'time', title: 'Time' },
            { data: 'duration', title: 'Duration' },
            { data: 'footNote', title: 'has footnote' },
        ]
    }
});
