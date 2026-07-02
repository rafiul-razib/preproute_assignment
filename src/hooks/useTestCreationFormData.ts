import { useLocation } from "react-router";
import type { TestCreationForm, TestType } from "../types/testCreation";

export const useTestCreationFormData = (expectedType: TestType) => {
  const location = useLocation();
  const formData = location.state as TestCreationForm | null;
  const isValid = Boolean(formData && formData.testType === expectedType);

  return { formData, isValid };
};
