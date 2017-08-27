export interface Schedule {
   name: string;
   complete: boolean;
   sections: Section[];
}

export interface Section {
   name: string;
   complete: boolean;
   sections: Section[];
}