
FinalFeaturedItem = new orion.collection('finalFeaturedItem', {
    singularName: 'Final Featured Item', // The name of one of this items
    pluralName: 'Final Featured Items', // The name of more than one of this items
    title: 'Final Featured Item', // The title of the page
    link: {
        /**
        * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
        */
        title: 'Final Featured Items'
    },
    /**
    * Tabular settings for this collection
    */
    tabular: {
        columns: [
            { data: 'name', title: 'Name' },
            { data: 'description', title: 'Description' },
            orion.attributeColumn('image', 'photo', 'Photo'),
        ]
    }
});

FinalFeaturedItem.helpers({
    getCreator: function () {
        return Meteor.users.findOne({ _id: this.createdBy });
    }
});

