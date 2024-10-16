/*import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import Reviews from "@/components/Reviews";
import { wixClientServer } from "@/lib/wixClientServer";*/
import { notFound } from "next/navigation";
import { Suspense } from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  /*const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];*/

  return (
   <div>shdsfhsf</div>
      
  );
};

export default SinglePage;