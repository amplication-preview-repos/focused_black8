import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SdgMappingListRelationFilter } from "../sdgMapping/SdgMappingListRelationFilter";
import { SurveyResponseListRelationFilter } from "../surveyResponse/SurveyResponseListRelationFilter";

export type BusinessWhereInput = {
  id?: StringFilter;
  industry?: StringNullableFilter;
  mission?: StringNullableFilter;
  name?: StringNullableFilter;
  sdgMappings?: SdgMappingListRelationFilter;
  surveyResponses?: SurveyResponseListRelationFilter;
};
