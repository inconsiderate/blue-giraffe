
Flavours = new orion.collection('flavours', {
    singularName: 'Flavour', // The name of one of this items
    pluralName: 'Flavours', // The name of more than one of this items
    title: 'Flavours', // The title of the page
    link: {
        /**
        * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
        */
        title: 'Flavours'
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

Flavours.helpers({
    getCreator: function () {
        return Meteor.users.findOne({ _id: this.createdBy });
    }
});

