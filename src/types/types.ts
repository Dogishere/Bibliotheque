export interface CardProps {
    title: string;
    value: number | string;
    icon?: React.ElementType;
}

export interface Book{
    title: string;
    author: string;
    year: number;
    genre: string;
    status?: "available" | "borrowed"
}