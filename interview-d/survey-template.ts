import * as types from "./types";

/*
#####################################################################
                    QUESTIONS SECTION
#####################################################################

  This is where we define the questions that are asked in a given a survey.
  In this example, we support three types of questions: 
  (1) Multiple choice questions
  (2) Date selection questions
  (3) Freeform text questions

  Take a close look at how the data for each question is structured. 
  What are we storing and why do you think that is?
  What do you think will be displayed for the customer to see? 

*/

const REASON_FOR_ABSENCE_QUESTION: types.Question = {
  type: "choice",
  questionText: {
    english: "Please select a reason for your absence:",
    spanish: "Seleccione un motivo para su ausencia:",
  },
  required: true,
  single: true,
  choices: [
    {
      key: "late",
      display: {
        english: "Late",
        spanish: "Tarde",
      },
    },
    {
      key: "illness",
      display: {
        english: "Illness",
        spanish: "Enfermedad",
      },
    },
    {
      key: "emergency",
      display: {
        english: "Family Emergency",
        spanish: "Emergencia familiar",
      },
    },
    {
      key: "unscheduled",
      display: {
        english: "Unscheduled Absence",
        spanish: "Ausencia no programada",
      },
    },
    {
      key: "other",
      display: {
        english: "Other",
        spanish: "Otro",
      },
    },
  ],
};

const UNSCHEDULED_QUESTION: types.Question = {
  type: "choice",
  questionText: {
    english: "Will You return tomorrow?",
    spanish: "¿Volverás mañana?",
  },
  required: true,
  single: true,
  choices: [
    {
      key: "yes",
      display: {
        english: "Yes",
        spanish: "Sí",
      },
    },
    {
      key: "no",
      display: {
        english: "No",
        spanish: "No",
      },
    },
  ],
};

const OTHER_REASON_QUESTION: types.Question = {
  type: "text",
  minLength: 1,
  questionText: {
    english: "Please provide futher details about the nature of your absense.",
    spanish:
      "Por favor, proporcione más detalles sobre la naturaleza de su absense.",
  },
};

const DATE_OF_ABSENCE_QUESTION: types.Question = {
  type: "date",
  range: "todayAndFuture",
  questionText: {
    english: "When is your absence for?",
    spanish: "¿Para cuando es tu ausencia?",
  },
};

const ADDITIONAL_INFO_QUESTION: types.Question = {
  type: "text",
  questionText: {
    english: "Is there anything else we should know?",
    spanish: "¿Hay algo más que debamos saber?",
  },
};

/*
#####################################################################
                    END SCREENS SECTION
#####################################################################

  This is where we define the possible endings to a survey.
  In this example we just have a generic ending with some text.

*/

const GENERIC_END_SCREEN: types.EndScreen = {
  display: {
    english: "Thank you for letting us know.",
    spanish: "Gracias por hacérnoslo saber.",
  },
};

/*
#####################################################################
                    STEPS SECTION
#####################################################################

  This section contains the logic of the survey. It determines:
  (1) What steps or in which order should we display the questions?
  (2) Should we ask certain questions only if they answer specifically to a different question?
  You can assume the first node in this section is the first question displayed in the survey.

  Study this data structure carefully. Think through:
  What do you think is happening in the "selections" section?
  How does this relate to the questions and end screens above? 
  Does question type matter? 
  
*/
const STEPS: types.Steps = {
  reason_for_absence: {
    ...REASON_FOR_ABSENCE_QUESTION,
    next: {
      selections: [
        {
          name: "reason_for_absence",
          answer: "unscheduled",
          next: "unscheduled_absence",
        },
        {
          name: "reason_for_absence",
          answer: "other",
          next: "other_reason",
        },
      ],
      default: "date_of_absence",
    },
  },
  unscheduled_absence: {
    ...UNSCHEDULED_QUESTION,
    next: {
      selections: [
        {
          name: "unscheduled_absence",
          answer: "yes",
          next: "additional_info",
        },
      ],
      default: "date_of_absence",
    },
  },
  other_reason: {
    ...OTHER_REASON_QUESTION,
    next: "date_of_absence",
  },
  date_of_absence: {
    ...DATE_OF_ABSENCE_QUESTION,
    next: "additional_info",
  },
  additional_info: {
    ...ADDITIONAL_INFO_QUESTION,
    next: "end_step",
  },
  end_step: GENERIC_END_SCREEN,
};
