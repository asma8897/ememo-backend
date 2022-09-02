export class UserDto {
    name: string;
    departmentId: string;
    jobTitle: string;
    companyId: number;
    createdOn: Date;
    updatedOn: Date;
    createdById: number;
    updatedById: number;
    deletedById: number;
    deletedOn: Date;
    status: "ACTIVE" | "DELETED";
    
}