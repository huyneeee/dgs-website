'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import strapiLoaderImg from '@/lib/loader';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Link } from '@/i18n/routing';

const DialogBanner = ({ banners }: { banners: Banner[] }) => {
  const [open, setOpen] = useState(true);
  const onClose = () => {
    sessionStorage.setItem('showedBanner', 'true');
    setOpen(false);
  };
  return (
    <Dialog
      open={open && !sessionStorage.getItem('showedBanner')}
      onOpenChange={onClose}
    >
      <DialogTrigger asChild className="hidden">
        <button>aaa</button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[800px] w-[90%] p-0 border-none outline-none !rounded-none bg-transparent">
        <Button
          variant="ghost"
          size="icon"
          className="absolute z-[2] top-0 right-0 rounded-full text-white border border-white -translate-y-1/2 translate-x-1/2"
          onClick={onClose}
        >
          <X />
        </Button>
        <DialogHeader className="hidden">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here
          </DialogDescription>
        </DialogHeader>
        <Carousel
          plugins={[
            Autoplay({
              delay: 15000,
            }),
          ]}
        >
          <CarouselContent className="">
            {banners.map(banner => (
              <CarouselItem
                key={banner.documentId}
                className="relative w-full h-[500px]"
              >
                <Link href={banner.link || '#'}>
                  <Image
                    src={banner.image.url}
                    alt="banner"
                    fill
                    loader={strapiLoaderImg}
                    sizes="60vw"
                    className="object-cover"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBanner;
