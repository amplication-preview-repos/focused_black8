import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type SurveyResponseUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  responseData?: InputJsonValue;
  responseDate?: Date | null;
};
