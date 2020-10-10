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
        url: "#",
      },
    ],
  },
  methods: {
    goTo: function (card) {
      if (card.url == "#") {
        window.alert("Not implemented yet!");
      } else {
        window.location.href = card.url;
      }
    },
  },
});
