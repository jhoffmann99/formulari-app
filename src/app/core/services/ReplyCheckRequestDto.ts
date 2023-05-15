export interface ReplyCheckRequestDto {
    uid: string,
    data: FieldReply[]
}

export interface FieldReply {
    name: string,
    type: 'TEXT' | 'NUMBER' | 'DATE',
    value: any
}