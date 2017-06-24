SEvents = new orion.collection('shortEvents', {
    singularName: 'Short Event', // The name of one of this items
    pluralName: 'Short Events', // The name of more than one of this items
    title: 'Short Events', // The title of the page
    link: {
        /**
        * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
        */
        title: 'Events - One Day'
    },
    /**
    * Tabular settings for this collection
    */
    tabular: {
        columns: [
            { data: 'location', title: 'Location' },
            { data: 'date', title: 'Date' },
            { data: 'time', title: 'Time' },
        ]
    }
});
