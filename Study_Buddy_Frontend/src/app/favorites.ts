// To parse this data:
//
//   import { Convert } from "./file";
//
//   const favorites = Convert.toFavorites(json);

export interface Favorites {
    id:       number;
    userId:   number;
    promptId: number;
    prompt:   null;
    user:     null;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toFavorites(json: string): Favorites[] {
        return JSON.parse(json);
    }

    public static favoritesToJson(value: Favorites[]): string {
        return JSON.stringify(value);
    }
}
