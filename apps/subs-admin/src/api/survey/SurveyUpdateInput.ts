import { InputJsonValue } from "../../types";

export type SurveyUpdateInput = {
  description?: string | null;
  questions?: InputJsonValue;
  title?: string | null;
};
