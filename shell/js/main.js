var credentials = {
  key: '556620f4e4b0ecaf733d0f3e'
};

var application = {
    secure: false,
    host: '52.4.236.245',
    port: 8080,
    path: '/zoomdata'
};

var sourceName = 'Real Time Sales';

var queryConfig = {
    tz: 'UTC',
    player: {
        speed: 1,
        pauseAfterRead: true
    },
    time: {
        timeField: '_ts'
    },
    filters: [],
    groupBy: [],
    metrics: [
        {
            name: 'price',
            func: 'avg'
        }
    ]
};

var visualizations = [
    {
        name: 'Gauge',
        variables: {
            'Metric': 'price:avg'
        }
    }
];

var swiper = new Swiper('.swiper-container');

debugger;

var client, query;
ZoomdataSDK.createClient({
    credentials: credentials,
    application: application
})
.then(function (newClient) {
    client = newClient;
    console.log(client);

    return client.createQuery(sourceName, queryConfig);
})
.then(function(newQuery) {
    query = newQuery;
    console.log(query);

    var visualization = visualizations[0];
      window.client.visualize({
          element: document.getElementById('visualization'),
          query: query,
          visualization: visualization.name,
          variables: visualization.variables
      });

    // var visualization1 = visualizations['treeMap'];

    // client
    //     .visualize({
    //         element: document.getElementById('treemap'),
    //         query: query,
    //         visualization: visualization1.name,
    //         variables: visualization1.variables
    //     });

    // var visualization2 = visualizations['donut'];

    // client
    //     .visualize({
    //         element: document.getElementById('donut'),
    //         query: query,
    //         visualization: visualization2.name,
    //         variables: visualization2.variables
    //     });
})
.catch(onError);

function onError(reason) {
    console.error(reason.stack || reason.statusText || reason);
}
