var credentials = {
  key: '554312fc4568aa27eafbe0ee'
};

var application = {
  secure: false,
  host: '192.168.42.67', //192.168.42.67
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
    func: 'avg'
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

var swiper = new Swiper('.swiper-container');

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

    var visualization1 = visualizations['treeMap'];

    client
        .visualize({
            element: document.getElementById('treemap'),
            query: query,
            visualization: visualization1.name,
            variables: visualization1.variables
        });

    var visualization2 = visualizations['donut'];

    client
        .visualize({
            element: document.getElementById('donut'),
            query: query,
            visualization: visualization2.name,
            variables: visualization2.variables
        });
})
.catch(onError);

function onError(reason) {
    console.error(reason.stack || reason.statusText || reason);
}
