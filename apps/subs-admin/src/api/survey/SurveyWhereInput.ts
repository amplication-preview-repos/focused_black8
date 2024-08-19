import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SurveyWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  questions?: JsonFilter;
  title?: StringNullableFilter;
};
