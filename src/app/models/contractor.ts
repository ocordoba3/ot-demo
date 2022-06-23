type Status = 'active' | 'signature pending';

type Type = 'traditional' | 'regular';

export interface Contractor {
    name: string;
    type: Type;
    start_date: string;
    amount: number;
    status: Status;
    picture: string;
}

