import type { ReactNode } from "react";
import { Navigate } from "react-router";
import AddQuestion from "../../../components/AddQuestion";
import TestSummaryCard from "../../../components/TestSummaryCard";
import { useTestCreationFormData } from "../../../hooks/useTestCreationFormData";
import type { TestType } from "../../../types/testCreation";

type TestTypePageContentProps = {
  testType: TestType;
  breadcrumbLabel: string;
  children?: ReactNode;
};

const TestTypePageContent = ({
  testType,
  breadcrumbLabel,
  children,
}: TestTypePageContentProps) => {
  const { formData, isValid } = useTestCreationFormData(testType);

  if (!isValid || !formData) {
    return <Navigate to="/dashboard/test-create" replace />;
  }

  return (
    <div className="w-full">
      <div className="breadcrumbs text-sm text-gray-500">
        <ul>
          <li>Test Creation</li>
          <li>Create Test</li>
          <li className="font-medium text-gray-800">{breadcrumbLabel}</li>
        </ul>
      </div>

      <div className="mt-6">
        <TestSummaryCard formData={formData} />
        <AddQuestion
          currentQuestion={1}
          totalQuestions={Number(formData.questionCount) || 50}
        />
        {children}
      </div>
    </div>
  );
};

export default TestTypePageContent;
