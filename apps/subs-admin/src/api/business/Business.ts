import { SdgMapping } from "../sdgMapping/SdgMapping";
import { SurveyResponse } from "../surveyResponse/SurveyResponse";

export type Business = {
  createdAt: Date;
  id: string;
  industry: string | null;
  mission: string | null;
  name: string | null;
  sdgMappings?: Array<SdgMapping>;
  surveyResponses?: Array<SurveyResponse>;
  updatedAt: Date;
};
