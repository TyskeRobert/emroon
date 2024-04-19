import Image from 'next/image';
import clsx from 'clsx';

export default function EmroonLogo({ size, invert }: { size: number, invert: boolean }) {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <Image 
        src="/emroon.png" 
        width={size * 10} 
        height={size * 10} 
        alt="The emroon logo" 
        className={clsx({
          'invert': invert
        })}
      />
    </div>
  );
}
