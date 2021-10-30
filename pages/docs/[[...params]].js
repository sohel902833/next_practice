import React from "react";
import { useRouter } from "next/router";
const Params = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  return (
    <div>
      <h1>Docs Home Page</h1>
    </div>
  );
};

export default Params;
