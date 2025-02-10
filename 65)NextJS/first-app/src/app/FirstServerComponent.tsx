// import { useState } from "react";
import Link from "next/link";
import ClientButton from "./ClientButton";

const getProducts = async () => {
    const response = await fetch("https://www.fakestoreapi.com/products");
    const content = await response.json();
    return content;
};

interface Product {
    id: string;
    title: string;
    price: string;
    description: string;
}
export default async function FirstServerComponent() {
    const product = await getProducts();
    return (
        <>
            <ClientButton />
            <Link href={"/blog/5"}>Click to go to a blog</Link>
            <h1>I am a server component</h1>
            {product.map((pItem: Product) => (
                <div key={pItem.id}>{pItem.title}</div>
            ))}
        </>
    );
}
