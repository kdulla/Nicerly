statLabels = ["Mean", "Neutral", "Nice"]
/*
chrome.storage.sync.set({key: value}, function() {
     console.log('Value is set to ' + value);
        });
  */    
function setData(data) {
	chrome.storage.sync.set({'nicely-data': data})
}

chrome.storage.sync.get('nicely-data', function(result) {
	if (typeof result.links === 'undefined') {
		console.log("nowhere")
		setData([0, 0, 0], makeChart);
	} else {
		makeChart()
	}
	console.log('Value currently is ' + result.key);
});

function getData(cb) {
	chrome.storage.sync.get('nicely-data', function(result) {
		if (typeof result.links === 'undefined') {
		} else {
			cb(result.key)
		}
	})
}

function updateChart() {
	removeData()
	chrome.storage.sync.get('nicely-data', function(result) {
		if (typeof result.links === 'undefined') {
			console.log("nowhere")
		} else {
			addData(result.key)
		}
	});
}

function makeChart() {
	
}

function addData(data) {
    chart.data.labels.push(statLabels.slice());
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData() {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

chrome.runtime.onMessage.addListener(onDataListener);
function onDataListener(msg, sender, sendResp) {
	console.log("Got message")
	if (msg.niceness == "-1") {
		getData(function(data) {
			d = data.slice()
			d[0] += 1
			setData(d);
		});
	} else if (msg.niceness == "0") {
		getData(function(data) {
			d = data.slice()
			d[1] += 1
			setData(d);
		});
	} else {
		getData(function(data) {
			d = data.slice()
			d[2] += 1
			setData(d)
		});
	}
}