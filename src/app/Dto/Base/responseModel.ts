export interface ResponseModel<T> {
    items: T[];
    isOk: boolean;
    item: T | null;
    message: string;
    hasValidLicense: boolean;
}