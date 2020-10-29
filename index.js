const mainCards = new Vue({
  el: "#cards",
  data: {
    cards: [
      {
        title: "I have a question for other modules!",
        subtitle: "For all your enquiries to other TP modules",
        url:
          "https://docs.google.com/forms/d/e/1FAIpQLScRepQMNs4Akr-rMadCT9dQk4Jqgt_XK0xRMGXp5rMFh61wAg/viewform?usp=sf_link",
      },
      {
        title: "Er... What was that lecture about?",
        subtitle: "I want to reach out to Lecturers",
        url:
          "https://docs.google.com/forms/d/e/1FAIpQLSc1-KWztS7kopod1hrC62_q8fJivwii4STqc6X6JzZ1mSJ93A/viewform?usp=sf_link",
      },
    ],
  },
});

const miscCards = new Vue({
  el: "#misc",
  data: {
    tabs: [
      {
        seen: 0,
        title: "How do I use these forms?",
        tldr: "TL,DR: Use the forms, everyone gets free ice cream",
        points: [
          {
            title: "PSD TP Questions",
            content: [
              "These forms are for use by the Product Owners only.",
              "Validation: Use the email that was sent to Peikai.",
              "Your questions will be directed to the appropriate modules.",
              "For further clarifications, use the form and direct your question to: 'The Three Stooges'.",
            ],
          },
          {
            title: "Lecturers",
            content: [
              "Fill up the form with your question(s) and module.",
              "Questions will be sent in batches to the lecturers by the Class Reps",
              "This ensures that everyone's question is seen, while reducing the load on the lecturers, allowing them to provide us with clearer responses.",
            ],
          },
        ],
      },
      {
        seen: 0,
        title: "How should I ask questions?",
        tldr: "TL,DR: Don't be a Karen/Ken",
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

const wikiCards = new Vue({
  el: "#wiki",
  data: {
    cards: [
      {
        title: "Team Project Wiki",
        subtitle: "Guidelines for a good experience",
        url: "https://github.com/UGS-CS/SLS-M00-Core/wiki",
      },
    ],
  },
});
