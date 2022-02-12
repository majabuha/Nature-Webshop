type ProductType = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    amount: number;
    totalPrice: number;
    lager: number;
}

type ShoppingType = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    amount: number;
    totalPrice: number;
    lager: number;
}

interface ItemProps {
    item: ProductType;
}

interface ShoppingItemProps {
    item: ShoppingType;
}

