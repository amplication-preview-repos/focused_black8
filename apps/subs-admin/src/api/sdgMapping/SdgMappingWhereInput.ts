import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SdgMappingWhereInput = {
  business?: BusinessWhereUniqueInput;
  description?: StringNullableFilter;
  goalNumber?: IntNullableFilter;
  id?: StringFilter;
};
