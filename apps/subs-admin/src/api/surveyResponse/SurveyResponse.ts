import { Business } from "../business/Business";
import { JsonValue } from "type-fest";

export type SurveyResponse = {
  business?: Business | null;
  createdAt: Date;
  id: string;
  responseData: JsonValue;
  responseDate: Date | null;
  updatedAt: Date;
};
