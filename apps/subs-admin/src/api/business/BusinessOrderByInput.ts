import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  industry?: SortOrder;
  mission?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
