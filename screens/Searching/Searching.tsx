'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import useSearching from '@/hooks/useSearching';
import { usePathname, useRouter } from '@/i18n/routing';
import { Search, X } from 'lucide-react';
import FoundItem from './FoundItem';

const Searching = () => {
  const [{ isOpen, input, data, isValidating }, { setInput, setIsOpen }] =
    useSearching();

  const pathname = usePathname();
  const { replace } = useRouter();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="hidden">Open</DialogTrigger>
      <DialogContent className="w-full h-full max-w-full rounded-none p-0">
        <DialogHeader className="hidden">
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col h-screen">
          <div className="bg-bamboo/10 py-3 flex items-center xl:px-0 px-5">
            <div className="w-full xl:max-w-[700px] mx-auto relative">
              <input
                defaultValue={input}
                type="text"
                className="placeholder:text-jungle font-semibold w-full h-full border-jungle border text-jungle rounded-md p-4 bg-transparent outline-none"
                placeholder="What are you looking for ?"
                onChange={e => setInput(e.target.value)}
              />
              <div className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
                <Search size={24} className="text-jungle" />
              </div>
            </div>
            <Button
              onClick={() => {
                setIsOpen(false);
                replace({
                  pathname,
                  query: {},
                });
              }}
              variant="ghost"
              size="lg"
              className="xl:absolute xl:top-[20px] xl:right-[5vw] px-3"
            >
              <X size={24} />
              <span className="xl:block hidden">Close</span>
            </Button>
          </div>
          {isValidating ? (
            <p className="w-full xl:max-w-[700px] mx-auto max-xl:px-5 mb-3">
              Searching...
            </p>
          ) : (
            <div className="flex-auto overflow-y-scroll w-full xl:max-w-[700px] mx-auto max-xl:px-5">
              {data?.results?.map((result, key) => (
                <FoundItem key={key} {...result} />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Searching;
