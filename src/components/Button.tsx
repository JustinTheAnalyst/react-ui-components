import React, {Component, ReactChild} from "react";
import {LoadingSpinner} from "./LoadingSpinner";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import {Guid} from "js-guid";

export enum ButtonType {
    Default,
    Outline,
    Text
}
export enum ButtonColor {
    Primary,
    Secondary,
    Danger
}
interface IProps {
    className?: string,
    onClick?: () => void,
    content: ReactChild,
    iconClass?: string,
    rightIconClass?: string,
    buttonType?: ButtonType,
    buttonColor?: ButtonColor,
    disabled?: boolean,
    loading?: boolean,
    tooltip?: string,
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left',
    tooltipDelay?: number,
};
interface IState {
    disabled?: boolean
}
export class Button extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            disabled: this.props.disabled,
        }
    }

    componentDidMount() {
        $('button[data-toggle="tooltip"]').tooltip();
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
        if (this.state.disabled != this.props.disabled) {
            this.setState(state => { return {
                disabled: this.props.disabled,
            }});
        }
    }

    render() {
        let content = this.props.content;
        let onClick = this.props.onClick;
        let iconClass = this.props.iconClass;
        let buttonType = this.props.buttonType;
        let buttonColor = this.props.buttonColor;
        let className = this.props.className;
        let buttonClass = this.generateButtonClass(buttonType, buttonColor);
        let tooltip = this.props.tooltip;
        let tooltipPosition = this.props.tooltipPosition;
        let id = new Guid().toString();

        return (<>
            {tooltip && <>
                {
                    ReactDOM.createPortal(
                        <ReactTooltip
                            id={id}
                            place={tooltipPosition}
                            effect='float'
                            delayShow={this.props.tooltipDelay}
                        >
                            {tooltip}
                        </ReactTooltip>,
                        document.body)
                }
            </>}
            <button
                data-tip
                data-for={id}
                className={`${buttonClass} ${className}`}
                type="button"
                onClick={() => { if (onClick) onClick() }}
                disabled={this.state.disabled || this.props.loading}
            >
                <span className={"d-flex flex-row align-items-center justify-content-center"}>
                    {iconClass &&
                        <span className="mr-2">
                            <i className={iconClass}></i>
                        </span>
                    }
                    {content}
                    {this.props.rightIconClass && !this.props.loading &&
                        <span className="ml-2">
                            <i className={this.props.rightIconClass}></i>
                        </span>
                    }
                    {this.props.loading &&
                        <span className="ml-2">
                            <LoadingSpinner faSizeClass={"fa-1x"} />
                        </span>
                    }
                </span>
            </button>
        </>);
    }

    private generateButtonClass(buttonType?: ButtonType, buttonColor?: ButtonColor) {
        if (!buttonType) buttonType = ButtonType.Default;
        if (!buttonColor) buttonColor = ButtonColor.Primary;

        let buttonClass = "";

        switch (buttonType) {
            case ButtonType.Default:
                buttonClass += "btn btn-";
                break;
            case ButtonType.Outline:
                buttonClass += "btn btn-outline-";
                break;
            case ButtonType.Text:
                buttonClass += "btn btn-text-";
                break;
        }

        switch (buttonColor) {
            case ButtonColor.Primary:
                buttonClass += "primary";
                break;
            case ButtonColor.Secondary:
                buttonClass += "secondary";
                break;
            case ButtonColor.Danger:
                buttonClass += "warning";
                break;
        }

        return buttonClass;
    }
}
