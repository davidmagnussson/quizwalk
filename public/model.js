var QuizModel = function() {
  this.getAllQuestions = () => {
    return questions;
  };

  this.getOneQuestion = input => {
    for (question of questions) {
      if (question.id === input) {
        return question;
      }
    }
  };

  var questions = [
    {
      id: 1,
      question: 'Vem myntade citatet "att vara eller att inte vara..."?',
      alternatives: [
        {
          one: "Barack Obama",
          two: "Winston Churchill",
          three: "William Shakespear",
          four: "Emily Dickinson"
        }
      ],
      correct: "three"
    },
    {
      id: 2,
      question: "Vilken är världens största ö?",
      alternatives: [
        {
          one: "Island",
          two: "Grönland",
          three: "Honshu",
          four: "Madagaskar"
        }
      ],
      correct: "two"
    },
    {
      id: 3,
      question: "Vem vann melodifestivalen 2012?",
      alternatives: [
        {
          one: "Måns Zelmerlöw",
          two: "Robin Bengtsson",
          three: "ABBA",
          four: "Loreen"
        }
      ],
      correct: "four"
    },
    {
      id: 4,
      question: "Vem regisserade Django Unchained?",
      alternatives: [
        {
          one: "Stephen Spielberg",
          two: "Christopher Nolan",
          three: "Quentin Tarantino",
          four: "Ingmar Bergman"
        }
      ],
      correct: "three"
    }
  ];
};
