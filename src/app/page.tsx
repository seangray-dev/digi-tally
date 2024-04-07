'use client';

import Counter from '@/components/ui/counter';
import Login from '@/components/ui/login';

export default function Home() {
  return (
    <main className='flex flex-col pb-12 md:pb-[103px] pt-8 md:pt-20 max-w-xs mx-auto flex-1'>
      <h1 className='font-extrabold text-2xl md:text-3xl mx-auto mb-10 md:mb-[55px]'>
        DigiTally
      </h1>
      <Counter />
      <Login />
    </main>
  );
}
