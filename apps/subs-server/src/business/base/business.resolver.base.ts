/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Business } from "./Business";
import { BusinessCountArgs } from "./BusinessCountArgs";
import { BusinessFindManyArgs } from "./BusinessFindManyArgs";
import { BusinessFindUniqueArgs } from "./BusinessFindUniqueArgs";
import { CreateBusinessArgs } from "./CreateBusinessArgs";
import { UpdateBusinessArgs } from "./UpdateBusinessArgs";
import { DeleteBusinessArgs } from "./DeleteBusinessArgs";
import { SdgMappingFindManyArgs } from "../../sdgMapping/base/SdgMappingFindManyArgs";
import { SdgMapping } from "../../sdgMapping/base/SdgMapping";
import { SurveyResponseFindManyArgs } from "../../surveyResponse/base/SurveyResponseFindManyArgs";
import { SurveyResponse } from "../../surveyResponse/base/SurveyResponse";
import { BusinessService } from "../business.service";
@graphql.Resolver(() => Business)
export class BusinessResolverBase {
  constructor(protected readonly service: BusinessService) {}

  async _businessesMeta(
    @graphql.Args() args: BusinessCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Business])
  async businesses(
    @graphql.Args() args: BusinessFindManyArgs
  ): Promise<Business[]> {
    return this.service.businesses(args);
  }

  @graphql.Query(() => Business, { nullable: true })
  async business(
    @graphql.Args() args: BusinessFindUniqueArgs
  ): Promise<Business | null> {
    const result = await this.service.business(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Business)
  async createBusiness(
    @graphql.Args() args: CreateBusinessArgs
  ): Promise<Business> {
    return await this.service.createBusiness({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Business)
  async updateBusiness(
    @graphql.Args() args: UpdateBusinessArgs
  ): Promise<Business | null> {
    try {
      return await this.service.updateBusiness({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Business)
  async deleteBusiness(
    @graphql.Args() args: DeleteBusinessArgs
  ): Promise<Business | null> {
    try {
      return await this.service.deleteBusiness(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [SdgMapping], { name: "sdgMappings" })
  async findSdgMappings(
    @graphql.Parent() parent: Business,
    @graphql.Args() args: SdgMappingFindManyArgs
  ): Promise<SdgMapping[]> {
    const results = await this.service.findSdgMappings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [SurveyResponse], { name: "surveyResponses" })
  async findSurveyResponses(
    @graphql.Parent() parent: Business,
    @graphql.Args() args: SurveyResponseFindManyArgs
  ): Promise<SurveyResponse[]> {
    const results = await this.service.findSurveyResponses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
