// To parse this data:
//
//   import { Convert } from "./file";
//
//   const prompt = Convert.toPrompt(json);

export interface Prompt {
    id:         number;
    question:   string;
    answer:     string;
    favoriteds: any[];
    show?:boolean;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPrompt(json: string): Prompt[] {
        return JSON.parse(json);
    }

    public static promptToJson(value: Prompt[]): string {
        return JSON.stringify(value);
    }
}
