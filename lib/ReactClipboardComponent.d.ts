import * as React from "react";
import ClipboardJS from "clipboard";
interface IProps {
    text: string;
    mark: number;
    onCopy?: () => void;
    onError?: () => void;
}
export default class ReactClipboardComponent extends React.Component<IProps> {
    rc: React.RefObject<HTMLDivElement>;
    clipboard?: ClipboardJS;
    preMark: number;
    constructor(props: IProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    onEmptyClick(e: React.MouseEvent): void;
    render(): JSX.Element;
}
export {};
