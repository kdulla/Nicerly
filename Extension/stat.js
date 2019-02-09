var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

statLabels = ["Mean", "Neutral", "Nice"]
var chart;
makeChart()

function setData(data, cb) {
	chrome.storage.sync.set({'nicely-data': data}, cb)
}

chrome.storage.sync.get('nicely-data', function(result) {
	if (typeof result.links === 'undefined') {
		console.log("nowhere")
		setData([0, 0, 0], makeChart);
	} else {
		makeChart()
	}
	console.log('Value currently is ' + result['nicely-data']);
});

function getData(cb) {
	chrome.storage.sync.get('nicely-data', function(result) {
		if (typeof result.links === 'undefined') {
		} else {
			cb(result['nicely-data'])
		}
	})
}

function updateChart() {
	removeData()
	chrome.storage.sync.get('nicely-data', function(result) {
		if (typeof result.links === 'undefined') {
			console.log("nowhere")
		} else {
			addData(result['nicely-data'])
		}
	});
}

function makeChart() {
	data = {
	    datasets: [{
		backgroundColor: ["#ff6961", "#76A9DC", "gray"],
		data: [2, 5, 10]
	    }],

	    labels: statLabels.slice(),

	    options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
		    yAxes: [{
			ticks: {
			    beginAtZero:true
			}
			}]
		}
	    }
	};
	// And for a doughnut chart
	chart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	});
}

function addData(data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData() {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

/*
setInterval(function() {
	updateChart();
}, 500);
*/

console.log("Things Ready")
