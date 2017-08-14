
Waffles = new orion.collection('waffles', {
    singularName: 'Waffle', // The name of one of this items
    pluralName: 'Waffles', // The name of more than one of this items
    title: 'Waffles', // The title of the page
    link: {
        /**
        * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
        */
        title: 'Waffles'
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

Waffles.helpers({
    getCreator: function () {
        return Meteor.users.findOne({ _id: this.createdBy });
    }
});

