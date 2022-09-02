import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoApprovalDto } from './create-memo-approval.dto';

export class UpdateMemoApprovalDto extends PartialType(CreateMemoApprovalDto) {}