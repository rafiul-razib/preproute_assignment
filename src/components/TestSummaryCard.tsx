import { Link } from "react-router";
import {
  FaBook,
  FaBrain,
  FaChartColumn,
  FaClock,
  FaFileLines,
  FaPen,
} from "react-icons/fa6";
import type { TestCreationForm } from "../types/testCreation";
import {
  difficultyStyles,
  formatDisplayValue,
  testTypeBadgeLabels,
  toPillValues,
} from "../utils/testDisplay";

type TestSummaryCardProps = {
  formData: TestCreationForm;
};

const TopicPills = ({ values }: { values: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {values.map((value) => (
      <span
        key={value}
        className="rounded-full border border-[#f0d58a] bg-[#fff8e6] px-3 py-1 text-sm text-[#c9921a]"
      >
        {formatDisplayValue(value)}
      </span>
    ))}
  </div>
);

const TestSummaryCard = ({ formData }: TestSummaryCardProps) => {
  const topicValues = toPillValues(formData.topic);
  const subTopicValues = toPillValues(formData.subTopic);
  const difficultyStyle = difficultyStyles[formData.difficulty];

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-[#000033] px-4 py-1.5 text-sm font-medium text-white">
          {testTypeBadgeLabels[formData.testType]}
        </span>
        <Link
          to="/dashboard/test-create"
          state={formData}
          className="text-[#5988EF] transition-colors hover:text-[#4f79db]"
          aria-label="Edit test details"
        >
          <FaPen className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <FaBook className="h-5 w-5 text-[#5988EF]" />
        <h2 className="text-2xl font-semibold text-gray-900">
          {formData.testName}
        </h2>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${difficultyStyle.badge}`}
        >
          <FaBrain className={`h-3.5 w-3.5 ${difficultyStyle.icon}`} />
          {formatDisplayValue(formData.difficulty)}
        </span>
      </div>

      <div className="mt-8 space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-gray-400">Subject</span>
          <span className="text-gray-400">:</span>
          <span className="font-medium text-gray-700">
            {formatDisplayValue(formData.subject)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-400">Topic</span>
          <span className="text-sm text-gray-400">:</span>
          <TopicPills values={topicValues} />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-400">Sub Topic</span>
          <span className="text-sm text-gray-400">:</span>
          <TopicPills values={subTopicValues} />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <div className="inline-flex overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center gap-2 border-r border-gray-200 px-4 py-3 text-sm text-gray-600">
            <FaClock className="h-4 w-4 text-gray-400" />
            <span>{formData.duration} Min</span>
          </div>
          <div className="flex items-center gap-2 border-r border-gray-200 px-4 py-3 text-sm text-gray-600">
            <FaFileLines className="h-4 w-4 text-gray-400" />
            <span>{formData.questionCount} Q&apos;s</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600">
            <FaChartColumn className="h-4 w-4 text-gray-400" />
            <span>{formData.totalMarks} Marks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSummaryCard;
