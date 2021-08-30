import './popup.css'
import * as React from "react";


class Popup extends React.Component {





    render() {
        if (this.props.isOpen)
            return (
                <div className={"popup"}>
                    <svg viewBox='0 0 512 512' className={"closeIcon"} onClick={this.props.changePopupStatus}
                         onTouchEnd={this.props.changePopupStatus}>
                        <title>Close</title>
                        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                              strokeWidth='32' d='M368 368L144 144M368 144L144 368'/>
                    </svg>
                    <div className="popupWindow">
                        {this.props.content}
                    </div>
                </div>
            )
        else
            return (
                <></>
            )
    }
}

export default Popup


