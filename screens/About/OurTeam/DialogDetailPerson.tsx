import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';

export const DialogDetailPerson = ({
  open = false,
  onClose,
}: {
  open: boolean;
  onClose: VoidFunction;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild className="hidden">
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="p-0 border-none overflow-hidden h-[500px] sm:max-w-[600px] sm:h-[300px] outline-none max-sm:max-w-[350px] max-sm:rounded-2xl">
        <DialogHeader className="hidden">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            alt="avatar"
            width={208}
            height={300}
            className="object-cover h-[300px] max-sm:hidden"
          />
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            alt="avatar"
            width={350}
            height={200}
            className="w-[350px] h-[200px] object-cover sm:hidden"
          />
          <div className="flex flex-col p-4 h-[300px]">
            <h5 className="text-base text-gray-900 font-semibold">
              Leslie Alexander
            </h5>
            <p className="text-sm text-gray-600">Co-Founder / CEO</p>
            <div className="overflow-scroll flex-auto mt-3">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quam iure. Facilis sit similique dolores totam
                laudantium ea ipsum! Molestiae ab at culpa deserunt vitae
                distinctio nulla alias animi sunt tenetur doloribus consequuntur
                dignissimos quas, eum delectus voluptate expedita. Iste
                blanditiis minus earum sit adipisci placeat quas quos ab tempore
                nesciunt quod reiciendis, vitae ea eos atque molestiae quibusdam
                hic. Perferendis vero quae nobis unde architecto consequatur
                maxime assumenda soluta debitis, quaerat et saepe accusamus
                perspiciatis quisquam voluptas incidunt qui, neque praesentium
                eveniet, error laboriosam fuga eum nesciunt. Dolores
                perspiciatis tenetur aut dignissimos vel expedita dicta
                explicabo quibusdam, eligendi voluptatum, dolore possimus, totam
                nobis hic? Aperiam nam labore voluptate delectus impedit, dolore
                provident veritatis veniam iste ad accusantium dolores,
                necessitatibus illo sit? Natus ea vitae ad. Tenetur repudiandae
                natus officia. Dolor illo, dolore voluptates voluptas ratione
                laudantium, in atque tempora omnis aliquam maiores inventore,
                laborum ipsum sint expedita quisquam molestiae totam! Excepturi
                nemo esse corporis? Expedita repellat ipsam dolore odit ipsum
                nostrum? Autem nisi maiores excepturi, molestiae assumenda
                reiciendis? Quis asperiores modi nesciunt animi reprehenderit
                commodi suscipit dolore, numquam nemo, alias tenetur voluptate.
                Ullam at aliquam, officia inventore cumque, est dignissimos enim
                porro provident rem consectetur id dicta sunt hic.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
