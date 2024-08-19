import { JsonValue } from "type-fest";

export type Survey = {
  createdAt: Date;
  description: string | null;
  id: string;
  questions: JsonValue;
  title: string | null;
  updatedAt: Date;
};
