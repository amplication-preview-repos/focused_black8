import { SdgMapping as TSdgMapping } from "../api/sdgMapping/SdgMapping";

export const SDGMAPPING_TITLE_FIELD = "id";

export const SdgMappingTitle = (record: TSdgMapping): string => {
  return record.id?.toString() || String(record.id);
};
