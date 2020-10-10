var app = new Vue({
  el: "#cards",
  data: {
    cards: [
      {
        title: "PSD TP Questions",
        subtitle: "For all your enquiries to other TP modules",
        url: "https://forms.gle/gRukE9R5NPSE3Zej6",
      },
      {
        title: "Er...",
        subtitle: "I want to reach out to Lecturers",
        url: "https://forms.gle/gRukE9R5NPSE3Zej6",
      },
    ],
  },
  methods: {
    goTo: function (card) {
      window.location.href = card.url;
    },
  },
});
