/*
In a nutshell, defining types allows us to describe the shape of objects.
*/

// For instance, this is where we define "Languages".
// It can only be the string "english" or "spanish".
// If it's "french", it will throw an error!
type Languages = "english" | "spanish";

// This is where we define "DisplayText".
// It must be an object that contains the type of Languages (defined above) as the key
// And a string must be the value
// { "english": "I am a random string" } is valid
// { "foo": "bar" } is not valid and will throw an error!
type DisplayText = Record<Languages, string>;

interface Choice {
  key: string;
  display: DisplayText;
}

export interface ChoiceSet {
  choices: Choice[];
}

interface ChoiceQuestion {
  type: "choice";
  questionText: DisplayText;
  required: boolean;
  single: boolean;
  choices: Choice[];
}

interface DateQuestion {
  type: "date";
  questionText: DisplayText;
  range: "past" | "pastAndToday" | "todayAndFuture" | "future";
}

interface TextQuestion {
  type: "text";
  questionText: DisplayText;
  minLength?: number;
}

export type Question = ChoiceQuestion | DateQuestion | TextQuestion;

export interface EndScreen {
  display: DisplayText;
}

interface ChoiceStep extends ChoiceQuestion {
  next: {
    selections?: Record<any, any>[];
    default: string;
  };
}

interface TextStep extends TextQuestion {
  next: string;
}

interface DateStep extends DateQuestion {
  next: string;
}

export type Steps = Record<
  string,
  ChoiceStep | TextStep | DateStep | EndScreen
>;

export interface Survey {
  startingStep: string;
  steps: Steps;
}
