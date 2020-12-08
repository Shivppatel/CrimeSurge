import fetch from 'node-fetch';

// Functions start 

function convertCrimesToCategories(crimeList) {
  // process your crimes here!
  const nuList = crimeList.reduce((collection, item, i) => {
    // for each item, check if we have a clearance_code_inc_type for that item already
    const findNu = collection.find((findItem) => findItem.label === item.clearance_code_inc_type);

    if (!findNu) {
      collection.push({
        label: item.clearance_code_inc_type,
        y: 1
      });
    } else {
      findNu.y += 1;
    }
    return collection;
  }, []);
  return nuList;
}

function makeYourOptionsObject(datapointsFromCrimeList) {
  // set your chart configuration here!
  CanvasJS.addColorSet('customColorSet1', [
    // add an array of colors here https://canvasjs.com/docs/charts/chart-options/colorset/
    '#cc0000',
    '#175cb6',
    '#3CB371',
    '#ffbf00',
    '#ff6600',
    '#8600b3'
  ]);

  const returnObject = {
    animationEnabled: true,
    colorSet: 'customColorSet1',
    title: {
      text: 'PG County Crime Visualization'
    },
    axisX: {
      interval: 1,
      labelFontSize: 12
    },
    axisY2: {
      interlacedColor: 'rgba(1,77,101,.2)',
      gridColor: 'rgba(1,77,101,.1)',
      title: 'Crimes By Category',
      labelFontSize: 12,
      scaleBreaks: {
        type: 'wavy',
        customBreaks: [{
          startValue: 40,
          endValue: 50,
          color: 'yellow'
        },
        {
          startValue: 85,
          endValue: 100,
          color: 'yellow'
        },
        {
          startValue: 140,
          endValue: 175,
          color: 'yellow'
        }
        ]
      } // Add your scale breaks here https://canvasjs.com/docs/charts/chart-options/axisy/scale-breaks/custom-breaks/
    },
    data: [{
      type: 'bar',
      name: 'crimes',
      axisYType: 'secondary',
      dataPoints: datapointsFromCrimeList
    }]
  };
  return returnObject;
}

function runThisWithResultsFromServer(jsonFromServer) {
  console.log('jsonFromServer', jsonFromServer);
  sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer)); // don't mess with this, we need it to provide unit testing support
  // Process your restaurants list
  // Make a configuration object for your chart
  // Instantiate your chart
  // Deleting reorganized Data and options makes page work. Why?
  const reorganizedData = convertCrimesToCategories(jsonFromServer);
  const options = makeYourOptionsObject(reorganizedData);
  const chart = new CanvasJS.Chart('chartContainer', options);
  chart.render();
}

// Leave lines 52-67 alone; do your work in the functions above
document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});
  
  //Functions end