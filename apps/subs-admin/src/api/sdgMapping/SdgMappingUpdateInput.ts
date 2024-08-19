import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type SdgMappingUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  description?: string | null;
  goalNumber?: number | null;
};
