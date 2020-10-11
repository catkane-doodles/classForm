const mainCards = new Vue({
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
        url: "https://forms.gle/cMdkuiDGNLx7zGvf7",
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

const miscCards = new Vue({
  el: "#misc",
  data: {
    tabs: [
      {
        seen: 0,
        title: "How do I use these forms?",
        points: [
          {
            title: "PSD TP Questions",
            content: [
              "These forms are for use by the Product Owners only.",
              "Validation: Use the email that was sent to Peikai.",
              "Your questions will be directed to the appropriate modules.",
            ],
          },
          {
            title: "Lecturers",
            content: [
              "Fill up the form with your question(s) and module.",
              "Questions will be sent in batches to the lecturers by the Class Reps",
              "This ensures that everyone's question is seen, while reducing the load on the lecturers, allowing them to provide us with clearer responses.",
              "TL,DR: Use the form, everyone gets free ice cream",
            ],
          },
        ],
      },
      {
        seen: 0,
        title: "How should I ask questions?",
        points: [
          {
            title: "Be courteous",
            content: [
              "We're all here because we need something from someone.",
              "Nobody likes dealing with a Karen/Ken. (Sorry Kennard, the internet voted)",
              "You may be right, but you don't have to be an asshole about it.",
            ],
          },
          {
            title: "Be nice",
            content: [
              "Both Lecturers and your other coursemates are at least as busy as you.",
              "Give them some time to respond. Everyone is trying their best.",
            ],
          },
          {
            title: "Be clear",
            content: [
              "Spend as long as you need to on the forms, nobody is rushing you.",
              "The clearer your enquiry is, the easier it is for the person to respond.",
            ],
          },
          {
            title: "Be understanding",
            content: [
              "If you have not gotten a reply, it doesn't mean you will not get one.",
              "They are probably working hard to give you a proper reply.",
              "But sometimes, things just cannot be done.",
              "It's nobody's fault, no one is out to get you.",
            ],
          },
          {
            title: "Be responsible",
            content: [
              "'Oh how the turntables' - Michael Scott",
              "You are setting the standards yourselves.",
              "If you decide to give evasive responses, do not be surprised if others to do the same to you.",
            ],
          },
        ],
      },
    ],
  },
  methods: {
    expand: function (tab) {
      tab.seen = (tab.seen + 1) % 2;
    },
  },
});
