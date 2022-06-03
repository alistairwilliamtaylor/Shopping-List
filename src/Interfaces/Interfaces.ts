export interface ItemType { crossed: boolean, name: string }

export type crossOut = (index: number) => void

export interface ItemProps {
    item: ItemType,
    index: number,
    crossOut: crossOut
}

export interface ShoppingListProps {
    items: ItemType[]
    crossOut: crossOut
}


