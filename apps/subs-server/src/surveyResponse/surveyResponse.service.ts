import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SurveyResponseServiceBase } from "./base/surveyResponse.service.base";

@Injectable()
export class SurveyResponseService extends SurveyResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
