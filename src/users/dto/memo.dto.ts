export class MemoDto {
    addressTo: string;
    from: string;
    departmentId: number;
    companyId: number;
    projectId: number;
    memoTypeId: number;
    createdOn: Date;
    updatedOn: Date;
    submittedOn: Date;
    userId: number;
    status: "ACTIVE";
    subject: string;
    content: string;
    executiveChairman: boolean;
    approvals: {
        memoId: number;
        groupId: number;
        userId: number;
        order: number;
        memoStatus: "PENDING"; 
    }[];
    memocc: {
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
    attachments : {
        memoId: number;
        userId: number;
        url: string;
        gspath: string;
        fileName: string;
    }[];
}