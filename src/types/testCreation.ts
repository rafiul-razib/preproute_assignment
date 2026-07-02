export type TestType = "chapterwise" | "pyq" | "mock";
export type Difficulty = "easy" | "medium" | "difficult";

export type TestCreationForm = {
  testType: TestType;
  subject: string;
  topic: string;
  duration: string;
  wrongAnswer: number;
  unattempted: number;
  correctAnswer: number;
  testName: string;
  subTopic: string;
  difficulty: Difficulty;
  questionCount: string;
  totalMarks: string;
};

export const testTypeLabels: Record<TestType, string> = {
  chapterwise: "Chapterwise",
  pyq: "PYQ",
  mock: "Mock Test",
};

export const isTestType = (value: string): value is TestType =>
  value === "chapterwise" || value === "pyq" || value === "mock";
