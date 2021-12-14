import { v4 as uuidv4 } from 'uuid';
import { IUUIDGenerator, UUIDGenerator } from '@/domain/contracts/gateways';

export class UUIDHandler implements IUUIDGenerator {
  uuid(): UUIDGenerator.Output {
    return uuidv4();
  }
}
