export interface Like {
    id: number;
    user_id: number;
    likeable_type: string;
    likeable_id: number;
    created_at: Date;
    updated_at: Date;
}
