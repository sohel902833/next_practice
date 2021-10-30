import React from "react";
import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const pageId = router.query.pageId;

  return (
    <div>
      Product {productId} Details And Page No {pageId}
    </div>
  );
};

export default ProductDetails;
