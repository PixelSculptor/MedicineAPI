export type Type = 'cures' | 'supplements' | 'vaccines';
export type Order = "asc" | "desc";

export interface IMedicines {
    name: string;
    type: Type;
    manufactuer: string;
    activeSubstance: string;
}