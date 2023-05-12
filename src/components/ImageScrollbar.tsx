import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { IPhoto } from '@/interfaces/properties';

interface Props {
    data: IPhoto[];
}

const ImageScrollbar = ({ data }: Props) => {
    return (
        <ScrollMenu>
            {data.map((item: IPhoto) => (
                <Box key={item.id} width='910px' overflow='hidden' p='1'>
                    <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" alt={''} />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default ImageScrollbar
