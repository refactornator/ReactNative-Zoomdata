var credentials = {
  key: '553f0863d4c676c935a83739'
};

var application = {
  secure: false,
  host: 'localhost',
  port: 8080,
  path: '/zoomdata'
};

var sourceName = 'Real Time Sales';

var queryConfig = {
  player: {
      pauseAfterRead: false,
      speed: 1,
      timeWindow: 'ROLLING_HOUR'
  },
  time: {
    timeField: '_ts',
  },
  tz: 'UTC',
  filters: [],
  groupBy: [{
    name: 'usercity',
    limit: 10,
    sort: {
      dir: 'desc',
      name: 'usersentiment'
    }
  }],
  metrics: [{
    name: 'usersentiment',
    func: 'AVG'
  }]
};

var visualizations = {
  bubbles: {
    name: 'Packed Bubbles',
    variables: {
      'Bubble Size': 'count',
      'Bubble Color': 'usersentiment:avg'
    }
  },
  donut: {
    name: 'Donut',
    variables: {
      'Size': 'count'
    }
  },
  treeMap: {
    name: 'Tree Map',
    variables: {
      'Size': 'count',
      'Color': 'count'
    }
  }
};

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

    var visualization = visualizations['donut'];

    client
        .visualize({
            element: document.body,
            query: query,
            visualization: visualization.name,
            variables: visualization.variables
        });
})
.catch(onError);

function onError(reason) {
    console.error(reason.stack || reason.statusText || reason);
}
