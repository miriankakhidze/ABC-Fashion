export interface CardListProps {
    data: MenuItem[]
}

export interface CardListItemProps extends MenuItem {
    index: number,
    length: number
}

export interface MenuItem {
    icon: string
    title?: string
    value?: string
    onPress?: () => void
}