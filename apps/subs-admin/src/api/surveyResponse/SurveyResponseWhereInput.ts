import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SurveyResponseWhereInput = {
  business?: BusinessWhereUniqueInput;
  id?: StringFilter;
  responseData?: JsonFilter;
  responseDate?: DateTimeNullableFilter;
};
