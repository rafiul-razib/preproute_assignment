import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import {
  testTypeLabels,
  type Difficulty,
  type TestCreationForm,
  type TestType,
} from "../../types/testCreation";

const testTypes: { id: TestType; label: string }[] = [
  { id: "chapterwise", label: testTypeLabels.chapterwise },
  { id: "pyq", label: testTypeLabels.pyq },
  { id: "mock", label: testTypeLabels.mock },
];

const TestCreation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const savedFormData = location.state as TestCreationForm | null;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TestCreationForm>({
    defaultValues: savedFormData ?? {
      testType: "chapterwise",
      wrongAnswer: -1,
      unattempted: 0,
      correctAnswer: 5,
      difficulty: "easy",
    },
  });

  const testType = watch("testType");

  const onSubmit = (data: TestCreationForm) => {
    navigate(`/dashboard/test-create/${data.testType}`, { state: data });
  };
  return (
    <div className="w-full">
      <div className="breadcrumbs text-sm text-gray-500">
        <ul>
          <li>Test Creation</li>
          <li>Create Test</li>
          <li>{testType}</li>
        </ul>
      </div>

      <div className="mt-4 inline-flex rounded-full border border-gray-200 bg-white p-1">
        {testTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() =>
              setValue("testType", type.id, {
                shouldDirty: true,
                shouldValidate: true,
              })
            }
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              testType === type.id
                ? "bg-[#e8efff] text-[#5988EF]"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-800">
              Subject
            </label>
            <select
              className="select h-11 w-full border-gray-200 bg-white"
              defaultValue=""
              {...register("subject", { required: "Subject is required" })}
            >
              <option value="" disabled>
                Choose from Drop-down
              </option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
            </select>
            {errors.subject && (
              <p className="text-xs text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-800">
              Name of Test
            </label>
            <input
              type="text"
              placeholder="Enter name of Test"
              className="input h-11 w-full border-gray-200 bg-white"
              {...register("testName", { required: "Test name is required" })}
            />
            {errors.testName && (
              <p className="text-xs text-red-500">{errors.testName.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-800">Topic</label>
            <select
              className="select h-11 w-full border-gray-200 bg-white"
              defaultValue=""
              {...register("topic", { required: "Topic is required" })}
            >
              <option value="" disabled>
                Choose from Drop-down
              </option>
              <option value="mechanics">Mechanics</option>
              <option value="optics">Optics</option>
              <option value="thermodynamics">Thermodynamics</option>
            </select>
            {errors.topic && (
              <p className="text-xs text-red-500">{errors.topic.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-800">
              Sub Topic
            </label>
            <select
              className="select h-11 w-full border-gray-200 bg-white"
              defaultValue=""
              {...register("subTopic", { required: "Sub topic is required" })}
            >
              <option value="" disabled>
                Choose from Drop-down
              </option>
              <option value="kinematics">Kinematics</option>
              <option value="dynamics">Dynamics</option>
              <option value="waves">Waves</option>
            </select>
            {errors.subTopic && (
              <p className="text-xs text-red-500">{errors.subTopic.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-800">
              Duration (Minutes)
            </label>
            <input
              type="number"
              min={1}
              placeholder="Enter the time"
              className="input h-11 w-full border-gray-200 bg-white"
              {...register("duration", { required: "Duration is required" })}
            />
            {errors.duration && (
              <p className="text-xs text-red-500">{errors.duration.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-800">
              Test Difficulty Level
            </p>
            <div className="flex flex-wrap gap-6 pt-1">
              {(["easy", "medium", "difficult"] as Difficulty[]).map(
                (level) => (
                  <label
                    key={level}
                    className="flex cursor-pointer items-center gap-2 text-sm capitalize text-gray-700"
                  >
                    <input
                      type="radio"
                      value={level}
                      className="radio radio-sm border-gray-300 checked:border-[#5988EF] checked:bg-[#5988EF]"
                      {...register("difficulty", { required: true })}
                    />
                    {level}
                  </label>
                ),
              )}
            </div>
          </div>

          <div className="space-y-2 md:col-span-1">
            <p className="text-sm font-semibold text-gray-800">
              Marking Scheme:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-600">
                  Wrong Answer
                </label>
                <input
                  type="number"
                  className="input h-11 w-full border-gray-200 bg-white"
                  {...register("wrongAnswer", { valueAsNumber: true })}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-600">
                  Unattempted
                </label>
                <input
                  type="number"
                  className="input h-11 w-full border-gray-200 bg-white"
                  {...register("unattempted", { valueAsNumber: true })}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-600">
                  Correct Answer
                </label>
                <input
                  type="number"
                  className="input h-11 w-full border-gray-200 bg-white"
                  {...register("correctAnswer", { valueAsNumber: true })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-800">
              No of Questions
            </label>
            <input
              type="number"
              min={1}
              placeholder="Ex:250 Marks"
              className="input h-11 w-full border-gray-200 bg-white"
              {...register("questionCount", {
                required: "Number of questions is required",
              })}
            />
            {errors.questionCount && (
              <p className="text-xs text-red-500">
                {errors.questionCount.message}
              </p>
            )}
          </div>

          <div className="space-y-1 md:col-start-2">
            <label className="text-sm font-semibold text-gray-800">
              Total Marks
            </label>
            <input
              type="number"
              min={1}
              placeholder="Ex:250 Marks"
              className="input h-11 w-full border-gray-200 bg-white"
              {...register("totalMarks", {
                required: "Total marks is required",
              })}
            />
            {errors.totalMarks && (
              <p className="text-xs text-red-500">
                {errors.totalMarks.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            className="btn h-11 min-h-11 border-gray-200 bg-white px-8 text-[#5988EF] hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn h-11 min-h-11 border-none bg-[#5988EF] px-8 text-white hover:bg-[#4f79db]"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestCreation;
