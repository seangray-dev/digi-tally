import { Toaster } from '@/components/ui/toaster';
import { ThirdwebProvider } from '@/providers/thirdweb-provider';
import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';

const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DigiTally',
  description: 'A simple web3 counter app on the Sepolia test network',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ThirdwebProvider>
        <body
          className={`${kumbhSans.className} min-h-screen flex flex-col antialiased bg-background`}>
          {children}
          <Toaster />
        </body>
      </ThirdwebProvider>
    </html>
  );
}
