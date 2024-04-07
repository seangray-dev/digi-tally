'use client';

import { chain, client } from '@/lib/thirdweb';
import { ConnectButton } from 'thirdweb/react';

export default function Login() {
  return (
    <ConnectButton
      connectButton={{ className: '!bg-primary' }}
      client={client}
      chain={chain}
    />
  );
}
