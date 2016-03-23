var React = require('React')
export class Box extends React.Component {
    render() {
        var name = this.props.name;
        console.log("Name is: "+name);
        console.log(this);
        return (
            <div class="grid-box" id="grid-box-{name}" key="{name}">
                {name}
            </div>
        )
    }
}
