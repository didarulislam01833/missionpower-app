"use client"; // এটি অবশ্যই দিতে হবে

import dynamic from 'next/dynamic';

// এখানে ssr: false কাজ করবে কারণ এটি একটি Client Component
const AIChatbot = dynamic(() => import('./AIChatbot'), {
    ssr: false,
});

export default function ChatWrapper() {
    return <AIChatbot />;
}