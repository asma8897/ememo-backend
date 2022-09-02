export class GroupDto {
    name: string;
    users: {
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
    }[];
    approvals: {
        memoId: number;
        groupId: number;
        userId: number;
        order: number;
        memoStatus: "PENDING"; 
    }[];
}