import { Module } from "@nestjs/common";
import { SdgMappingModuleBase } from "./base/sdgMapping.module.base";
import { SdgMappingService } from "./sdgMapping.service";
import { SdgMappingController } from "./sdgMapping.controller";
import { SdgMappingResolver } from "./sdgMapping.resolver";

@Module({
  imports: [SdgMappingModuleBase],
  controllers: [SdgMappingController],
  providers: [SdgMappingService, SdgMappingResolver],
  exports: [SdgMappingService],
})
export class SdgMappingModule {}
