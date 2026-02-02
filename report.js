const newman = require('newman');

newman.run({
    collection: require('./Collection/dmoney-test.postman_collection.json'),
    reporters: ['cli', 'htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/postman-report.html'
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Report generated');
});
