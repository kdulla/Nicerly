var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

data = {
    datasets: [{
	backgroundColor: ["#ff6961", "#76A9DC"],
        data: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Blue'
    ],
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
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
});

function addData(label, data) {
    chart.data.labels.push(label);
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
