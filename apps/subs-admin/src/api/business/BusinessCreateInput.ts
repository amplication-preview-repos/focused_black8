import { SdgMappingCreateNestedManyWithoutBusinessesInput } from "./SdgMappingCreateNestedManyWithoutBusinessesInput";
import { SurveyResponseCreateNestedManyWithoutBusinessesInput } from "./SurveyResponseCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  industry?: string | null;
  mission?: string | null;
  name?: string | null;
  sdgMappings?: SdgMappingCreateNestedManyWithoutBusinessesInput;
  surveyResponses?: SurveyResponseCreateNestedManyWithoutBusinessesInput;
};
