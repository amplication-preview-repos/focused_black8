/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  SurveyResponse as PrismaSurveyResponse,
  Business as PrismaBusiness,
} from "@prisma/client";

export class SurveyResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SurveyResponseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.surveyResponse.count(args);
  }

  async surveyResponses(
    args: Prisma.SurveyResponseFindManyArgs
  ): Promise<PrismaSurveyResponse[]> {
    return this.prisma.surveyResponse.findMany(args);
  }
  async surveyResponse(
    args: Prisma.SurveyResponseFindUniqueArgs
  ): Promise<PrismaSurveyResponse | null> {
    return this.prisma.surveyResponse.findUnique(args);
  }
  async createSurveyResponse(
    args: Prisma.SurveyResponseCreateArgs
  ): Promise<PrismaSurveyResponse> {
    return this.prisma.surveyResponse.create(args);
  }
  async updateSurveyResponse(
    args: Prisma.SurveyResponseUpdateArgs
  ): Promise<PrismaSurveyResponse> {
    return this.prisma.surveyResponse.update(args);
  }
  async deleteSurveyResponse(
    args: Prisma.SurveyResponseDeleteArgs
  ): Promise<PrismaSurveyResponse> {
    return this.prisma.surveyResponse.delete(args);
  }

  async getBusiness(parentId: string): Promise<PrismaBusiness | null> {
    return this.prisma.surveyResponse
      .findUnique({
        where: { id: parentId },
      })
      .business();
  }
}