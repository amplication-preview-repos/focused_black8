import { SdgMappingUpdateManyWithoutBusinessesInput } from "./SdgMappingUpdateManyWithoutBusinessesInput";
import { SurveyResponseUpdateManyWithoutBusinessesInput } from "./SurveyResponseUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  industry?: string | null;
  mission?: string | null;
  name?: string | null;
  sdgMappings?: SdgMappingUpdateManyWithoutBusinessesInput;
  surveyResponses?: SurveyResponseUpdateManyWithoutBusinessesInput;
};
