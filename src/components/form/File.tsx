import { Upload } from "lucide-react";
import { ComponentProps, forwardRef, useImperativeHandle, useRef } from "react";
import { UseFormRegister } from "react-hook-form";
import Button from "../button/Button";

export type FileProps = ComponentProps<"input"> &
  Omit<
    Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>,
    "onChange"
  >;

const File = forwardRef<HTMLInputElement, FileProps>((props, ref) => {
  const fileRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => fileRef.current!);

  const onClick = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        {...props}
        ref={fileRef}
        className="hidden"
      />
      <Button
        type="button"
        variant="secondary"
        icon={<Upload size={16} className="mr-3" />}
        size="lg"
        onClick={onClick}
      >
        画像アップロード
      </Button>
    </div>
  );
});

File.displayName = "File";

export default File;
