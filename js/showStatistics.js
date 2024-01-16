const ctx = document.getElementById("myChart");

let ar = 1.2;
if (screen.availWidth >= 784) {
  ar = 2;
}

if (screen.availWidth >= 1440) {
  ar = 3;
}

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["01.12.2023", "07.12.2023", "14.12.2023"],
    datasets: [
      {
        label: "3 of Votes",
        data: [19, 3, 5, 2, 3, 11],
        borderWidth: 1,
      },
    ],
  },
  options: {
    aspectRatio: ar,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["01.12.2023", "07.12.2023", "14.12.2023"],
    datasets: [
      {
        label: "Математика",
        data: [10, 9, 10],
        borderWidth: 1,
      },
    ],
  },
  options: {
    aspectRatio: ar,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
