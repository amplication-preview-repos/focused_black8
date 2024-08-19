import { Module } from "@nestjs/common";
import { SurveyResponseModuleBase } from "./base/surveyResponse.module.base";
import { SurveyResponseService } from "./surveyResponse.service";
import { SurveyResponseController } from "./surveyResponse.controller";
import { SurveyResponseResolver } from "./surveyResponse.resolver";

@Module({
  imports: [SurveyResponseModuleBase],
  controllers: [SurveyResponseController],
  providers: [SurveyResponseService, SurveyResponseResolver],
  exports: [SurveyResponseService],
})
export class SurveyResponseModule {}
