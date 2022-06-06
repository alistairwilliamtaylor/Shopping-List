export interface ItemType { crossed: boolean, name: string }

type crossOut = (index: number) => void

export interface InputBoxProps {
    addNewItemToList: (itemName: string) => void
}

export interface ItemProps {
    item: ItemType,
    index: number,
    crossOut: crossOut
}

export interface ShoppingListProps {
    items: ItemType[]
    crossOut: crossOut
}


