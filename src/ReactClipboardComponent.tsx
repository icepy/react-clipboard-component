import * as React from "react";
import ClipboardJS from "clipboard";

interface IProps {
  text: string;
  mark: number;
  onCopy?: () => void;
  onError?: () => void;
}

export default class ReactClipboardComponent extends React.Component<IProps> {

  public rc: React.RefObject<HTMLDivElement>;
  public clipboard?: ClipboardJS;
  public preMark: number;

  constructor(props: IProps) {
    super(props);
    this.rc = React.createRef<HTMLDivElement>();
    this.preMark = props.mark;
  }

  public componentDidMount() {
    const { onCopy, onError } = this.props;
    this.clipboard = new ClipboardJS(this.rc.current!, {
      text: () => {
        return this.props.text;
      },
    });
    this.clipboard.on("success", (e: ClipboardJS.Event) => {
      if (onCopy) {
        onCopy();
      }
    });
    this.clipboard.on("error", (e: ClipboardJS.Event) => {
      if (onError) {
        onError();
      }
    });
  }

  public componentDidUpdate() {
    if (this.props.text && this.props.mark > this.preMark ) {
      this.preMark = this.props.mark;
      this.rc.current!.click();
    }
  }

  public componentWillUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

  public onEmptyClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  public render() {
    return (
      <>
        <div ref={this.rc} onClick={this.onEmptyClick}></div>
        {this.props.children}
      </>
    );
  }
}