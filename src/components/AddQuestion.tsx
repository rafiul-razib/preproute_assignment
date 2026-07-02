import { useForm } from "react-hook-form";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaFileCsv,
  FaImage,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaPlus,
  FaStrikethrough,
  FaTable,
  FaTrash,
  FaUnderline,
} from "react-icons/fa6";
import { TbMathFunction } from "react-icons/tb";
import QuestionSettings from "./QuestionSettings";
import {
  createEmptyQuestionForm,
  optionFields,
  type AddQuestionForm,
} from "../types/question";

type AddQuestionProps = {
  currentQuestion?: number;
  totalQuestions?: number;
  onAddMcq?: () => void;
  onCsv?: () => void;
  onSubmit?: (data: AddQuestionForm) => void;
};

const toolbarButtons = [
  { icon: FaItalic, label: "Italic" },
  { icon: FaBold, label: "Bold" },
  { icon: FaUnderline, label: "Underline" },
  { icon: FaStrikethrough, label: "Strikethrough" },
  { icon: FaLink, label: "Link" },
  { icon: FaImage, label: "Image" },
  { icon: FaTable, label: "Table" },
  { icon: TbMathFunction, label: "Formula" },
  { icon: FaAlignLeft, label: "Align left" },
  { icon: FaAlignCenter, label: "Align center" },
  { icon: FaAlignRight, label: "Align right" },
  { icon: FaAlignJustify, label: "Justify" },
  { icon: FaListUl, label: "Bullet list" },
  { icon: FaListOl, label: "Numbered list" },
];

const AddQuestion = ({
  currentQuestion = 1,
  totalQuestions = 50,
  onAddMcq,
  onCsv,
  onSubmit,
}: AddQuestionProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AddQuestionForm>({
    defaultValues: createEmptyQuestionForm(),
  });

  const handleDeleteAllEdits = () => {
    reset(createEmptyQuestionForm());
  };

  const handleFormSubmit = (data: AddQuestionForm) => {
    onSubmit?.(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mt-8 w-full rounded-2xl border border-gray-200 bg-white p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Question {currentQuestion}/{totalQuestions}
        </h2>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onAddMcq}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaPlus className="h-3.5 w-3.5" />
            MCQ
          </button>
          <button
            type="button"
            onClick={onCsv}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaFileCsv className="h-4 w-4" />
            CSV
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={handleDeleteAllEdits}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600"
      >
        <FaTrash className="h-3.5 w-3.5" />
        Delete All Edits
      </button>

      <div className="mt-6 space-y-1">
        <label className="text-sm font-semibold text-gray-800">
          Question text
        </label>
        <div className="relative overflow-hidden rounded-xl border border-gray-200">
          <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-50 px-3 py-2">
            {toolbarButtons.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="rounded p-2 text-gray-500 hover:bg-white hover:text-gray-800"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>

          <textarea
            rows={6}
            placeholder="Type here"
            className="min-h-40 w-full resize-none border-0 bg-white px-4 py-4 text-sm text-gray-800 outline-none"
            {...register("questionText", { required: "Question text is required" })}
          />

          <button
            type="button"
            onClick={() => setValue("questionText", "")}
            className="absolute bottom-3 right-3 text-gray-400 hover:text-red-500"
            aria-label="Clear question text"
          >
            <FaTrash className="h-4 w-4" />
          </button>
        </div>
        {errors.questionText && (
          <p className="text-xs text-red-500">{errors.questionText.message}</p>
        )}
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700">
          Type the options below
        </p>

        <div className="mt-4 space-y-3">
          {optionFields.map(({ key, label, placeholder }) => (
            <div key={key} className="flex items-center gap-3">
              <input
                type="radio"
                value={key}
                className="radio radio-sm border-gray-300 checked:border-[#5988EF] checked:bg-[#5988EF]"
                aria-label={`Mark ${label} as correct`}
                {...register("correctOption", { required: true })}
              />
              <div className="flex-1 space-y-1">
                <label className="text-xs font-medium text-gray-500">{label}</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="input h-11 w-full border-gray-200 bg-white"
                  {...register(key, { required: `${label} is required` })}
                />
                {errors[key] && (
                  <p className="text-xs text-red-500">{errors[key]?.message}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Explanation <span className="text-gray-400">(optional)</span>
        </label>
        <div className="relative overflow-hidden rounded-xl border border-gray-200">
          <textarea
            rows={5}
            placeholder="Type here"
            className="min-h-32 w-full resize-none border-0 bg-white px-4 py-4 text-sm text-gray-800 outline-none"
            {...register("explanation")}
          />
          <button
            type="button"
            onClick={() => setValue("explanation", "")}
            className="absolute bottom-3 right-3 text-gray-400 hover:text-red-500"
            aria-label="Clear explanation"
          >
            <FaTrash className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Media URL <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="url"
          placeholder="https://example.com/image.png"
          className="input h-11 w-full rounded-xl border-gray-200 bg-white"
          {...register("mediaUrl")}
        />
      </div>

      <QuestionSettings register={register} />
    </form>
  );
};

export default AddQuestion;
