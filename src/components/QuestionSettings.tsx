import { Link } from "react-router";
import type { UseFormRegister } from "react-hook-form";
import {
  difficultyOptions,
  subTopicOptions,
  topicOptions,
  type AddQuestionForm,
} from "../types/question";

type QuestionSettingsProps = {
  register: UseFormRegister<AddQuestionForm>;
};

const QuestionSettings = ({ register }: QuestionSettingsProps) => {
  return (
    <section className="mt-8 w-full max-w-4xl">
      <h3 className="text-xl font-semibold text-gray-800">Question settings</h3>

      <div className="mt-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Level of Difficulty
          </label>
          <select
            className="select h-12 w-full rounded-xl border border-gray-200 bg-white text-gray-500"
            defaultValue=""
            {...register("difficulty")}
          >
            <option value="">Select from Drop-down</option>
            {difficultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Topic</label>
          <select
            className="select h-12 w-full rounded-xl border border-gray-200 bg-white text-gray-500"
            defaultValue=""
            {...register("topic")}
          >
            <option value="">Select from Drop-down</option>
            {topicOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Sub-topic</label>
          <select
            className="select h-12 w-full rounded-xl border border-gray-200 bg-white text-gray-500"
            defaultValue=""
            {...register("subTopic")}
          >
            <option value="">Select from Drop-down</option>
            {subTopicOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <Link
          to="/dashboard/test-create"
          className="rounded-xl bg-[#FF8585] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#ff7676]"
        >
          Exit test creation
        </Link>
        <button
          type="submit"
          className="rounded-xl bg-[#7B8CFF] px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6f80f5]"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default QuestionSettings;
