import { SurveyResponseWhereInput } from "./SurveyResponseWhereInput";
import { SurveyResponseOrderByInput } from "./SurveyResponseOrderByInput";

export type SurveyResponseFindManyArgs = {
  where?: SurveyResponseWhereInput;
  orderBy?: Array<SurveyResponseOrderByInput>;
  skip?: number;
  take?: number;
};
