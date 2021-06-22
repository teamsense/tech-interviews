const { count_survey_responses } = require("./index");

test("When there are no survey responses, it returns null", () => {
  data = [];
  expect(count_survey_responses(data)).toBe(null);
});

test("When there is one survey response, with one question and one answer, it returns the count of 1 for that question/answer", () => {
  data = [
    {
      id: 348340,
      completed: "2021-05-25T21:41:17.187Z",
      questions: [
        {
          answers: ["Somewhat"],
          question: "How likely are you to recommend our product?",
          question_id: 13403,
        },
      ],
    },
  ];
  expect(count_survey_responses(data)[13403]["Somewhat"]).toBe(1);
});

test("When there are two survey responses, both containing the same question and answer, it returns the count of 2 for that question/answer", () => {
  data = [
    {
      id: 348340,
      completed: "2021-05-25T21:41:17.187Z",
      questions: [
        {
          answers: ["Somewhat"],
          question: "How likely are you to recommend our product?",
          question_id: 13403,
        },
      ],
    },
    {
      id: 389289,
      completed: "2021-05-25T21:41:17.187Z",
      questions: [
        {
          answers: ["Somewhat"],
          question: "How likely are you to recommend our product?",
          question_id: 13403,
        },
      ],
    },
  ];
  expect(count_survey_responses(data)[13403]["Somewhat"]).toBe(2);
});

test("When there is one survey response, with one question and two selected answers, then it returns the count of 1 for each answer to the question", () => {
  data = [
    {
      id: 348340,
      completed: "2021-05-25T21:41:17.187Z",
      questions: [
        {
          answers: ["Green", "Blue"],
          question:
            "Which of these colors are your favorite? (Select all that apply)",
          question_id: 28726,
        },
      ],
    },
  ];
  expect(count_survey_responses(data)[28726]["Green"]).toBe(1);
  expect(count_survey_responses(data)[28726]["Blue"]).toBe(1);
});

test("When there is one survey response with multiple questions and multiple answers, it returns the count of 1 for each answer to the questions", () => {
  data = [
    {
      id: 348340,
      completed: "2021-05-25T21:41:17.187Z",
      questions: [
        {
          answers: ["Green", "Blue"],
          question:
            "Which of these colors are your favorite? (Select all that apply)",
          question_id: 28726,
        },
        {
          answers: ["Somewhat"],
          question: "How likely are you to recommend our product?",
          question_id: 13403,
        },
      ],
    },
  ];
  expect(count_survey_responses(data)[28726]["Green"]).toBe(1);
  expect(count_survey_responses(data)[28726]["Blue"]).toBe(1);
  expect(count_survey_responses(data)[13403]["Somewhat"]).toBe(1);
});
