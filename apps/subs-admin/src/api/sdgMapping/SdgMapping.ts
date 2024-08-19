import { Business } from "../business/Business";

export type SdgMapping = {
  business?: Business | null;
  createdAt: Date;
  description: string | null;
  goalNumber: number | null;
  id: string;
  updatedAt: Date;
};
