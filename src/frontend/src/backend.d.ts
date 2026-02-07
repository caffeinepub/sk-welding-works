import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    isPremium: boolean;
    name: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface Address {
    zip: string;
    street: string;
    country: string;
    city: string;
}
export interface backendInterface {
    addAdmin(email: string): Promise<void>;
    getAllContactInfo(): Promise<{
        whatsapp?: string;
        facebook?: string;
        address?: Address;
        adminEmails: Array<string>;
        phone?: string;
    }>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getContactInfo(): Promise<{
        whatsapp?: string;
        facebook?: string;
        address?: Address;
        phone?: string;
    }>;
    markAsPremium(id: bigint): Promise<void>;
    removeAdmin(email: string): Promise<void>;
    submitInquiry(name: string, phone: string, message: string, isPremium: boolean): Promise<void>;
    updateContact(fb: string, whatsapp: string, phone: string, addr: Address): Promise<void>;
}
