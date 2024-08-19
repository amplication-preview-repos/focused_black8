import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SdgMappingService } from "./sdgMapping.service";
import { SdgMappingControllerBase } from "./base/sdgMapping.controller.base";

@swagger.ApiTags("sdgMappings")
@common.Controller("sdgMappings")
export class SdgMappingController extends SdgMappingControllerBase {
  constructor(protected readonly service: SdgMappingService) {
    super(service);
  }
}
