import Image from 'next/image'
import imagem from '../../../public/perfil-2.jpg'

const ShownUserData = () => {
    //https://cdn.pixabay.com/photo/2023/05/23/12/48/squirtle-8012702_1280.jpg
    //https://cdn.pixabay.com/photo/2023/06/19/09/15/pokemon-8073929_1280.jpg
    //https://cdn.pixabay.com/photo/2023/05/20/16/01/ai-generated-8006756_1280.jpg


    return (
        <div className='flex space-x-4'>
            <Image src={imagem} alt={'profile picture'} className='h-14 w-14 rounded-full'/>            
            <div className='flex flex-col justify-evenly'>
                <h2 className='text-2xl font-bold'>Teste da silva</h2>
                <p>Backend developer</p>
            </div>
        </div>
    )
}

export default ShownUserData