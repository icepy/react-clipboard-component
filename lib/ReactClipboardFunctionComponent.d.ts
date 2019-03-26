import React from "react";
interface IProps {
    text: string;
    onCopy?: () => void;
    onError?: () => void;
    children?: React.ReactNode;
}
export default function ReactClipboardFunctionComponent(props: IProps): JSX.Element;
export {};
