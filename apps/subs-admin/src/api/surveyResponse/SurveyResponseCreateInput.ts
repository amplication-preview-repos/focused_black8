import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type SurveyResponseCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  responseData?: InputJsonValue;
  responseDate?: Date | null;
};
