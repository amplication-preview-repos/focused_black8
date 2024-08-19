/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SdgMappingWhereUniqueInput } from "../../sdgMapping/base/SdgMappingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SdgMappingUpdateManyWithoutBusinessesInput {
  @Field(() => [SdgMappingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SdgMappingWhereUniqueInput],
  })
  connect?: Array<SdgMappingWhereUniqueInput>;

  @Field(() => [SdgMappingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SdgMappingWhereUniqueInput],
  })
  disconnect?: Array<SdgMappingWhereUniqueInput>;

  @Field(() => [SdgMappingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SdgMappingWhereUniqueInput],
  })
  set?: Array<SdgMappingWhereUniqueInput>;
}

export { SdgMappingUpdateManyWithoutBusinessesInput as SdgMappingUpdateManyWithoutBusinessesInput };
