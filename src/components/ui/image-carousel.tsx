import type { CollectionEntry } from 'astro:content'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

function ImageCarousel({
  images,
}: {
  images: CollectionEntry<'groupPhotos'>[]
}) {
  return (
    <Carousel className="w-full" plugins={[Autoplay({ playOnInit: true, delay: 5000 })]}>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div className="flex flex-col gap-1 px-1">
              <img
                className="w-full aspect-2/1 max-h-72 object-contain object-bottom rounded-lg shadow-md"
                src={image.data.image.src}
                alt={image.data.caption}
              />
              <p className="text-muted-foreground text-sm italic w-full text-center">{image.data.caption}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ImageCarousel
