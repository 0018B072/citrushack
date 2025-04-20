// 'use client';
// // import React from 'react'; 
// import { loadStripe } from '@stripe/stripe-js';
// import { useState } from 'react';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);

// export default function Home() {
//   const [loading, setLoading] = useState(false);

//   async function handleCheckout() {
//     setLoading(true);
//     const res = await fetch('/api/checkout', {
//       method: 'POST',
//       body: JSON.stringify({ priceId: process.env.NEXT_PUBLIC_PRICE_ID }),
//       headers: { 'Content-Type': 'application/json' },
//     }).then(r => r.json());

//     const stripe = await stripePromise;
//     await stripe!.redirectToCheckout({ sessionId: res.url.split('/')[3] });
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center">
//       <button
//         onClick={handleCheckout}
//         disabled={loading}
//         className="rounded-lg bg-black px-6 py-3 text-white"
//       >
//         {loading ? 'Redirecting�' : 'Pay \.99'}
//       </button>
//     </main>
//   );
// }
// app/page.tsx  –  Next.js 15 / React 18
'use client';

import Image from 'next/image';

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
  category: 'Crochet' | 'Drawing' | 'Painting';
  description: string;
};

const products: Product[] = [
  {
    id: 'shirt',
    title: 'Crochet Shirt',
    price: '$35.00',
    image: '/images/first-shirt.jpg',
    category: 'Crochet',
    description: 'Hand‑woven cotton crochet shirt in pastel tones.',
  },
  {
    id: 'crop‑top',
    title: 'Crochet Crop‑Top',
    price: '$29.00',
    image: '/images/crop-top.jpg',
    category: 'Crochet',
    description: 'Lightweight summer crop‑top with shell stitch pattern.',
  },
  {
    id: 'earrings',
    title: 'Crochet Earrings',
    price: '$15.00',
    image: '/images/earrings.jpg',
    category: 'Crochet',
    description: 'Mini flower‑motif earrings with hypoallergenic hooks.',
  },
  // add drawings & paintings here …
];

export default function Home() {
  const groups = products.reduce<Record<string, Product[]>>((acc, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-lime-200 p-8 font-sans">
      <h1 className="mb-8 text-4xl font-black text-brown-900">
        The Lore of Crochet Github Edit
      </h1>

      {Object.entries(groups).map(([category, items]) => (
        <section key={category} className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-[#160801]">
            {category}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((p) => (
              <article
                key={p.id}
                className="flex flex-col rounded-lg border border-black bg-[#574119] p-4 text-[#160801]"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={300}
                  className="mb-3 h-48 w-full rounded object-cover"
                />

                <h3 className="font-semibold">{p.title}</h3>
                <p className="mb-2 text-sm">{p.description}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="font-bold">{p.price}</span>
                  <button className="rounded bg-black px-3 py-1 text-white hover:bg-brown-900">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
