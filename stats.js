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

  console.log(stats);

  return stats;
}

// let chart = null;
// function drawStats(arr, targetCanvas) {
//   if (!targetCanvas) return;
//   let labels = [];
//   let data = [];
//   for (const property in arr) {
//     labels.push(property);
//     data.push(arr[property]);
//   }

//   const ctx = document.getElementById("myChart");
//   if (chart) {
//     chart.destroy();
//   }
//   chart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: "Number of jokes",
//           data: data,
//           borderWidth: 5,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// }
