import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoTypeDto } from './create-memo-type.dto';

export class UpdateMemoTypeDto extends PartialType(CreateMemoTypeDto) {}