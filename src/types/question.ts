import type { Difficulty } from "./testCreation";

export type CorrectOption = "option1" | "option2" | "option3" | "option4";

export type AddQuestionForm = {
  questionText: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: CorrectOption;
  explanation: string;
  difficulty: Difficulty | "";
  topic: string;
  subTopic: string;
  mediaUrl: string;
};

export const topicOptions = [
  { value: "mechanics", label: "Mechanics" },
  { value: "optics", label: "Optics" },
  { value: "thermodynamics", label: "Thermodynamics" },
] as const;

export const subTopicOptions = [
  { value: "kinematics", label: "Kinematics" },
  { value: "dynamics", label: "Dynamics" },
  { value: "waves", label: "Waves" },
] as const;

export const difficultyOptions: { value: Difficulty; label: string }[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "difficult", label: "Difficult" },
];

export const optionFields: {
  key: CorrectOption;
  label: string;
  placeholder: string;
}[] = [
  { key: "option1", label: "Option 1", placeholder: "Type option 1 here" },
  { key: "option2", label: "Option 2", placeholder: "Type option 2 here" },
  { key: "option3", label: "Option 3", placeholder: "Type option 3 here" },
  { key: "option4", label: "Option 4", placeholder: "Type option 4 here" },
];

export const createEmptyQuestionForm = (): AddQuestionForm => ({
  questionText: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  correctOption: "option1",
  explanation: "",
  difficulty: "",
  topic: "",
  subTopic: "",
  mediaUrl: "",
});
