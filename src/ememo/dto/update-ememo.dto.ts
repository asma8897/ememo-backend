import { PartialType } from '@nestjs/mapped-types';
import { CreateEmemoDto } from './create-ememo.dto';

export class UpdateEmemoDto extends PartialType(CreateEmemoDto) {}
