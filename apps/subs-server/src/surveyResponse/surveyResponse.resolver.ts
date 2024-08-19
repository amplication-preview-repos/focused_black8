import * as graphql from "@nestjs/graphql";
import { SurveyResponseResolverBase } from "./base/surveyResponse.resolver.base";
import { SurveyResponse } from "./base/SurveyResponse";
import { SurveyResponseService } from "./surveyResponse.service";

@graphql.Resolver(() => SurveyResponse)
export class SurveyResponseResolver extends SurveyResponseResolverBase {
  constructor(protected readonly service: SurveyResponseService) {
    super(service);
  }
}
