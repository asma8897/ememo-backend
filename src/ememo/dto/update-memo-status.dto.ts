import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoStatusDto } from './create-memo-status.dto';

export class UpdateMemoStatusDto extends PartialType(CreateMemoStatusDto) {}