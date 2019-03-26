import React, { useEffect, useRef } from "react";
import ClipboardJS from "clipboard";

interface IProps {
  text: string;
  onCopy?: () => void;
  onError?: () => void;
  children?: React.ReactNode;
}

export default function ReactClipboardFunctionComponent (props: IProps){
  const rc = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props.text) {
      const clipboard = new ClipboardJS(rc.current!, {
        text: () => {
          return props.text;
        }
      });
      clipboard.on("success", (e: ClipboardJS.Event) => {
        const onCopy = props.onCopy;
        if (onCopy) {
          onCopy();
        }
      });
      clipboard.on("error", (e: ClipboardJS.Event) => {
        const onError = props.onError;
        if (onError) {
          onError();
        }
      });
      rc.current!.click();
      return () => {
        clipboard.destroy();
      }
    }
  });

  return (
    <div>
      <div ref={rc}></div>
      { props.children }
    </div>
  )
}