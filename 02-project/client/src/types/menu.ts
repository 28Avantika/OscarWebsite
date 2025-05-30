export interface MenuOption {
  id: number;
  name: string;
  half?: string;
  full: string;
  description?: string;
}

export interface MenuSubcategory {
  subcategory_id: number;
  subcategory_name: string;
  image?: string;
  options: MenuOption[];
}

export interface MenuCategory {
  category_id: number;
  category_name: string;
  icon: string;
  items: MenuSubcategory[];
}