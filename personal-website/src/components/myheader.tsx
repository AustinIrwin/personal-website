import Image from 'next/image'
import chillGuy from '@/media/chillGuy.jpg'

export default function Header() {
    return (
        <div className='flex flex-row justify-start'>
            <Image src={chillGuy} height={200} width={200} alt='Austin Irwin relaxed' className='rounded-full'></Image>
            <div className='mx-5'>
                <div className='text-3xl'>Austin Irwin</div>
                <div className='mt-2 w-60'>Hey there! I'm a student at UNC (class of '27) studying computer 
                science. I like to run, read sci-fi books, and listen to music.</div>
            </div> 

        </div>
    );
}