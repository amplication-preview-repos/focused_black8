import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type SdgMappingCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  description?: string | null;
  goalNumber?: number | null;
};
