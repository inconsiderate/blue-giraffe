
if (Meteor.isServer) {

    if (Meteor.users.find().count() < 1) {
        Meteor.users.remove({});

        var mike = Accounts.createUser({
            email: 'admin@admin.com',
            password: 'password',
        });
    }

    if (LEvents.find().count() < 4) {
        LEvents.remove({});

        LEvents.insert({
            location: 'South Hamptons',
            date: new Date(),
            time: '2pm - 9pm',
            footnote: true,
        });
        LEvents.insert({
            location: 'South Hamptons',
            date: new Date(),
            time: '2pm - 9pm',
            footnote: true,
        });
        LEvents.insert({
            location: 'South Hamptons',
            date: new Date(),
            time: '2pm - 9pm',
            footnote: true,
        });
        LEvents.insert({
            location: 'South Hamptons',
            date: new Date(),
            time: '2pm - 9pm',
            footnote: true,
        });
    }

    if (SEvents.find().count() < 3) {
        SEvents.remove({});

        SEvents.insert({
            location: 'County Fair',
            date: new Date(),
            time: '4pm - 9pm',
        });
        SEvents.insert({
            location: 'County Fair',
            date: new Date(),
            time: '4pm - 9pm',
        });
        SEvents.insert({
            location: 'County Fair',
            date: new Date(),
            time: '4pm - 9pm',
        });
    }

    if (Flavours.find().count() < 3) {
        Flavours.remove({});

        Flavours.insert({
            name: 'Raspberry',
            description: 'This is an example of a description',
        });
        Flavours.insert({
            name: 'Raspberry',
            description: 'This is an example of a description',
        });
        Flavours.insert({
            name: 'Raspberry',
            description: 'This is an example of a description',
        });
    }
}