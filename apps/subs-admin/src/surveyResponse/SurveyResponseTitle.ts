import { SurveyResponse as TSurveyResponse } from "../api/surveyResponse/SurveyResponse";

export const SURVEYRESPONSE_TITLE_FIELD = "id";

export const SurveyResponseTitle = (record: TSurveyResponse): string => {
  return record.id?.toString() || String(record.id);
};
