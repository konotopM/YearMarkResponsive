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
    labels: [
      "01.12.2023",
      "07.12.2023",
      "14.12.2023",
      "22.12.2023",
      "26.12.2023",
      "27.12.2023",
      "28.12.2023",
      "29.12.2023",
      "16.01.2024",
      "18.01.2024",
    ],
    datasets: [
      {
        label: "3 of Votes",
        data: [10, 9, 10, 11, 10, 8, 11, 10, 9, 8],
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
