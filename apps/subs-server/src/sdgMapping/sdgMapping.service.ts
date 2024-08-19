import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SdgMappingServiceBase } from "./base/sdgMapping.service.base";

@Injectable()
export class SdgMappingService extends SdgMappingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
