import * as React from "react";
import './style.css';


interface IProps { 
    title: string; 
}

// 'IProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Header extends React.Component<IProps, {}> {
    render() {
        return <div className="header">
                    <span className="title">{this.props.title}</span>
                </div>;
    }
}