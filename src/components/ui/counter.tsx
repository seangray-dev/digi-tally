import { CONTRACT } from '@/lib/thirdweb';
import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';
import { prepareContractCall } from 'thirdweb';
import {
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from 'thirdweb/react';
import { useToast } from './use-toast';

export default function Counter() {
  const account = useActiveAccount();

  const { data: count, isLoading } = useReadContract({
    contract: CONTRACT,
    method: 'getCount',
  });

  return (
    <div className='flex flex-col justify-center items-center gap-12 md:gap-[110px] max-w-xs mx-auto mb-20 flex-1'>
      <div className='w-full'>
        {!account && (
          <p className='text-center text-red-600 mb-2'>
            Please connect your wallet
          </p>
        )}
        <div className='w-full flex items-center bg-secondary p-2 rounded-full justify-center gap-1'>
          <CounterTransaction method={'decrement'}>-</CounterTransaction>
          <CounterTransaction method={'increment'}>+</CounterTransaction>
        </div>
      </div>
      <div className='text-[80px] md:text-[100px] font-bold w-[300px] md:w-[410px] h-[300px] md:h-[410px] flex justify-center items-center rounded-full bg-gradient-to-br from-secondary to-secondary/20 border-8 shadow-primary/20 shadow-2xl'>
        {isLoading ? (
          <div className='text-base flex flex-col gap-2 items-center justify-center'>
            <Loader2 className='mr-2 h-10 w-10 animate-spin' />
            Please wait
          </div>
        ) : (
          <div>{count?.toString()}</div>
        )}
      </div>
    </div>
  );
}

const CounterTransaction = ({
  method,
  children,
}: {
  method: 'increment' | 'decrement';
  children: ReactNode;
}) => {
  const { toast } = useToast();
  const { refetch } = useReadContract({
    contract: CONTRACT,
    method: 'getCount',
  });

  return (
    <TransactionButton
      className='!bg-primary !w-1/2 !rounded-[26.5px] !text-2xl !p-0 !max-w-1/2 !min-w-0 !h-12 !flex !justify-center !items-center'
      transaction={() =>
        prepareContractCall({
          contract: CONTRACT,
          method,
        })
      }
      onError={() => {
        toast({
          variant: 'destructive',
          title: 'An unexpected error occurred. Please try again.',
        });
      }}
      onTransactionConfirmed={() => {
        toast({
          title: 'Transaction Successful!',
        });
        refetch();
      }}
      onTransactionSent={() => {
        toast({
          title: 'Transaction sent.',
        });
      }}>
      {children}
    </TransactionButton>
  );
};
