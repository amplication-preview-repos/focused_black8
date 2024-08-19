import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SurveyResponseService } from "./surveyResponse.service";
import { SurveyResponseControllerBase } from "./base/surveyResponse.controller.base";

@swagger.ApiTags("surveyResponses")
@common.Controller("surveyResponses")
export class SurveyResponseController extends SurveyResponseControllerBase {
  constructor(protected readonly service: SurveyResponseService) {
    super(service);
  }
}
