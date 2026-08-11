import type { CardProps } from "../types/types";

export default function Card({ title, value, icon: Icon }: CardProps) {
    return (
        <div className="flex justify-between p-5 bg-white rounded-xl shadow-sm">
            <div className="mr-8">
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-3xl font-bold mt-2">{value}</p>
            </div>

            {Icon && (
                <div className="text-3xl text-amber-600">
                    <Icon />
                </div>
            )}
        </div>
    );
}