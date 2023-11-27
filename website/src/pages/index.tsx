import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import ShopByCategory from "~/components/homepage/categories";
import CtaSection from "~/components/homepage/cta-section";
import Hero from "~/components/homepage/hero";
import NewArrivals from "~/components/homepage/new-arrivals";
import ProductList from "~/components/homepage/product-list";
import Layout from "~/components/layout";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
      <Hero />
      <NewArrivals />
      <ShopByCategory />
      <ProductList />
      <CtaSection />
    </Layout>
  );
};

export default Home;
// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
