import React from "react";

interface Props {
    section: string,
    name: string,
}

export class NavigationItem extends React.Component<Props> {

    section: any;

    constructor(props: Props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(): void {
        this.section = document.getElementById(this.props.section);
    }

    handleClick(event: React.MouseEvent) {
        event.preventDefault();
        this.section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    render(): React.ReactElement| null | undefined {
        return (<a onClick={this.handleClick}>{this.props.name}</a>);
    }
}