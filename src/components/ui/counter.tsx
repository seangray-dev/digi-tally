import { CONTRACT } from '@/lib/thirdweb';
import { prepareContractCall } from 'thirdweb';
import {
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from 'thirdweb/react';

export default function Counter() {
  const account = useActiveAccount();
  const {
    data: count,
    isLoading,
    refetch,
  } = useReadContract({
    contract: CONTRACT,
    method: 'getCount',
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col justify-center items-center gap-12 md:gap-[110px] max-w-xs mx-auto mb-20 flex-1'>
      <div className='w-full'>
        {!account && (
          <p className='text-center text-red-600 mb-2'>
            Please connect your wallet
          </p>
        )}
        <div className='w-full flex items-center bg-secondary p-2 rounded-full justify-center gap-1'>
          <TransactionButton
            className='!bg-primary !w-1/2 !rounded-[26.5px] !text-2xl !p-0 !max-w-1/2 !min-w-0 !h-12 !flex !justify-center !items-center'
            transaction={() =>
              prepareContractCall({
                contract: CONTRACT,
                method: 'decrement',
              })
            }
            onTransactionConfirmed={() => refetch()}>
            -
          </TransactionButton>
          <TransactionButton
            className='!bg-primary !w-1/2 !rounded-[26.5px] !text-2xl !p-0 !max-w-1/2 !min-w-0 !h-12 !flex !justify-center !items-center'
            transaction={() =>
              prepareContractCall({
                contract: CONTRACT,
                method: 'increment',
              })
            }
            onTransactionConfirmed={() => refetch()}>
            +
          </TransactionButton>
        </div>
      </div>
      <div className='text-[80px] md:text-[100px] font-bold w-[300px] md:w-[410px] h-[300px] md:h-[410px] flex justify-center items-center rounded-full bg-gradient-to-br from-secondary to-secondary/20 border-8 drop-shadow-[0_-50px_-50px_0px_rgba(100,100,100,1)]'>
        {count?.toString()}
      </div>
    </div>
  );
}
