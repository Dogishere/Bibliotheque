export interface CardProps {
    title: string;
    value: number | string;
    icon?: React.ElementType;
}

export interface Book{
    id: string;
    title: string;
    author: string;
    year: number;
    genre: string;
    status?: "available" | "borrowed"
}

export interface Member {
    id:string;
    firstName: string;
    lastName : string;
    email: string;
    registrationDate: string;
}