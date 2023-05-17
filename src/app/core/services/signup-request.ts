export interface SignUpRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dateOfBirth: string,
    gender: 'male' | 'female' | 'diverse'
}