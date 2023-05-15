export interface CreateCheckRequestDto {
    name: string,
    templateName: string,
    transmissionType: string,
    recipients: CheckRecipientDto[]
}

export interface CheckRecipientDto {
    firstName: string,
    lastName: string,
    salutation: 'MR' | 'MRS',
    email: string,
    mobilePhone?: string
}