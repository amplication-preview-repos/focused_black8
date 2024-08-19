import { SortOrder } from "../../util/SortOrder";

export type SurveyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  questions?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
