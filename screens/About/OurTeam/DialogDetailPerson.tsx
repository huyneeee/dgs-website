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
      <DialogContent className="p-0 border-none overflow-hidden h-[600px] max-w-[90%] w-full md:max-w-[800px] md:h-[400px] outline-none rounded-md">
        <DialogHeader className="hidden">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row max-md:justify-center max-md:items-center">
          <div className="relative m-3 md:m-0 size-[200px] md:size-[400px] min-w-[200px] md:min-w-[400px]">
            <Image
              src={getImageLink(person.avatar.url)}
              alt="avatar"
              fill
              className="object-cover "
            />
          </div>
          {/* <Image
            src={getImageLink(person.avatar.url)}
            alt="avatar"
            width={350}
            height={200}
            className="w-[350px] h-[200px] object-cover sm:hidden"
          /> */}
          <div className="flex flex-col p-6 h-[400px] gap-3 text-center md:text-left">
            <h5 className="text-base text-jungle font-semibold text-[32px]">
              {person.name}
            </h5>
            <p className="text-sm text-black text-[20px]">{person.role}</p>
            <div className="overflow-y-auto flex-auto">
              <p className="text-[16px] mt-4">{person.summary}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
