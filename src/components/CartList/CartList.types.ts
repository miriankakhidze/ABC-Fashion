export interface CartListProps {
    data: CartItem[]
}

export interface CartListItemProps extends CartItem {
    index: number,
    length: number
}

export interface CartItem {
    img: string,
    title: string,
    price: number,
    quantity: number,
    onPress?: () => void
}