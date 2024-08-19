import * as graphql from "@nestjs/graphql";
import { SdgMappingResolverBase } from "./base/sdgMapping.resolver.base";
import { SdgMapping } from "./base/SdgMapping";
import { SdgMappingService } from "./sdgMapping.service";

@graphql.Resolver(() => SdgMapping)
export class SdgMappingResolver extends SdgMappingResolverBase {
  constructor(protected readonly service: SdgMappingService) {
    super(service);
  }
}
