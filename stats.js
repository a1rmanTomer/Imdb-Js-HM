function getTypeStats(arr) {
  let stats = {};

  arr.forEach((elem) => {
    const type = elem.Type;
    if (stats[type]) {
      stats[type]++;
    } else {
      stats[type] = 1;
    }
  });

  return stats;
}

let chart = null;
function drawStats(arr) {
  const ctx = document.getElementById("statsChart").getContext("2d");
  const stats = getTypeStats(arr);
  console.log(stats);

  let drawStats = [];
  let labels = [];

  for (const property in stats) {
    labels.push(property);
    drawStats.push(stats[property]);
  }

  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: drawStats,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Types",
        },
      },
    },
  });
}
