import type { Difficulty, TestCreationForm } from "../types/testCreation";

export const testTypeBadgeLabels: Record<TestCreationForm["testType"], string> = {
  chapterwise: "Chapter Wise",
  pyq: "PYQ",
  mock: "Mock Test",
};

export const formatDisplayValue = (value: string) =>
  value
    .split(/[\s_-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const toPillValues = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export const difficultyStyles: Record<
  Difficulty,
  { badge: string; icon: string }
> = {
  easy: {
    badge: "bg-[#33b5a5] text-white",
    icon: "text-white",
  },
  medium: {
    badge: "bg-[#f0ad4e] text-white",
    icon: "text-white",
  },
  difficult: {
    badge: "bg-[#e74c3c] text-white",
    icon: "text-white",
  },
};
