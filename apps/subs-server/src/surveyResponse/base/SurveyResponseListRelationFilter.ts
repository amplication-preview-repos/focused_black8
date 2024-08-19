/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SurveyResponseWhereInput } from "./SurveyResponseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SurveyResponseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SurveyResponseWhereInput,
  })
  @ValidateNested()
  @Type(() => SurveyResponseWhereInput)
  @IsOptional()
  @Field(() => SurveyResponseWhereInput, {
    nullable: true,
  })
  every?: SurveyResponseWhereInput;

  @ApiProperty({
    required: false,
    type: () => SurveyResponseWhereInput,
  })
  @ValidateNested()
  @Type(() => SurveyResponseWhereInput)
  @IsOptional()
  @Field(() => SurveyResponseWhereInput, {
    nullable: true,
  })
  some?: SurveyResponseWhereInput;

  @ApiProperty({
    required: false,
    type: () => SurveyResponseWhereInput,
  })
  @ValidateNested()
  @Type(() => SurveyResponseWhereInput)
  @IsOptional()
  @Field(() => SurveyResponseWhereInput, {
    nullable: true,
  })
  none?: SurveyResponseWhereInput;
}
export { SurveyResponseListRelationFilter as SurveyResponseListRelationFilter };