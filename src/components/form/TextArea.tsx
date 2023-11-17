import {
  ClipboardEvent,
  ComponentProps,
  KeyboardEvent,
  forwardRef,
} from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import FormError from "./FormError";

export type TextAreaProps = {
  error?: FieldError;
} & ComponentProps<"textarea"> &
  Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, ...props }, ref) => {
    const onKeyDown = (
      e:
        | KeyboardEvent<HTMLTextAreaElement>
        | ClipboardEvent<HTMLTextAreaElement>
    ) => {
      const textarea = e.target as HTMLTextAreaElement;
      setTimeout(() => {
        textarea.style.height = `0`;
        textarea.style.height = `${textarea.scrollHeight}px`;
      }, 100);
    };

    return (
      <>
        <textarea
          rows={1}
          {...props}
          className="resize-none w-full border border-gray-400 focus-visible:border-accent focus-visible:outline-none p-3 overflow-hidden"
          ref={ref}
          onKeyDown={onKeyDown}
          onPaste={onKeyDown}
        ></textarea>
        <FormError error={error} />
      </>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
