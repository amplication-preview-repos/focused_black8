import { InputJsonValue } from "../../types";

export type SurveyCreateInput = {
  description?: string | null;
  questions?: InputJsonValue;
  title?: string | null;
};
