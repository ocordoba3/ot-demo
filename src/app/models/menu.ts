export interface Menu {
    name: string;
    icon: string; 
    sub_items: Array<SubMenu>;
}

interface SubMenu {
    name: string;
}