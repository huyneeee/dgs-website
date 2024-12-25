import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getImageLink } from '@/lib/utils';
import Image from 'next/image';

export const DialogDetailPerson = ({
  person,
  onClose,
}: {
  person: TeamMember;
  onClose: VoidFunction;
}) => {
  return (
    <Dialog open={!!person.id} onOpenChange={onClose}>
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
            src={getImageLink(person.avatar.url)}
            alt="avatar"
            width={208}
            height={300}
            className="object-cover h-[300px] max-sm:hidden"
          />
          <Image
            src={getImageLink(person.avatar.url)}
            alt="avatar"
            width={350}
            height={200}
            className="w-[350px] h-[200px] object-cover sm:hidden"
          />
          <div className="flex flex-col p-4 h-[300px]">
            <h5 className="text-base text-gray-900 font-semibold">
              {person.name}
            </h5>
            <p className="text-sm text-gray-600">{person.title}</p>
            <div className="overflow-scroll flex-auto mt-3">
              <p className="text-sm">{person.desc}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
