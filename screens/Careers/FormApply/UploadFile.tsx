/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

const UploadFile = ({
  file,
  setFile,
  error,
}: {
  file: File | null;
  setFile: (file: File) => void;
  error?: string;
}) => {
  const t = useTranslations('Careers');
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (files: File[]) => {
    setFile(files[0]);
  };

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <form
        onDragEnter={handleDrag}
        onSubmit={e => e.preventDefault()}
        className="w-full h-[160px] bg-white rounded-[8px] border border-dashed border-gray-500 relative flex items-center justify-center mb-3 cursor-pointer px-2"
      >
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          multiple={false}
          onChange={handleChange}
          className="hidden"
          accept=".pdf,.txt,.docx,.xlsx"
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? 'drag-active' : ''}
        >
          {file ? (
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-sm text-gray-600 truncate max-w-[300px]">
                {file.name}
              </p>
              <Button
                variant="outline"
                className="w-fit"
                onClick={onButtonClick}
              >
                Change file
              </Button>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="text-sm text-gray-600">{t('dragDropFile')}</p>
              <p className="text-sm text-gray-600">{t('validateFile')}</p>
            </div>
          )}
        </label>
        {dragActive && (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className="absolute w-full h-full top-0 left-0"
          ></div>
        )}
      </form>
      {error && (
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-[#E03B3B] text-white flex items-center justify-center">
            !
          </div>
          <p className="text-[14px] text-[#E03B3B]">{t(error as any)}</p>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
