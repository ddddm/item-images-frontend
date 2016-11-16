/**
 * Created by dima on 09.11.16.
 */

import React, {Component} from 'react';

function UploadChangeFileInput(props) {

    return props.type && props.onChange? (
        <input type="file" onChange={e => {
            props.onChange(
                e.target.files[0],
                props.type
            )
        }}/>
    ) : null
}

class UploadChange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            files: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleSubmit(e) {
        let { onSubmit } = this.props;
        let data = new FormData();

        e.preventDefault();

        this.state.files.forEach((file) => {
            data.append(file.type, file.file);
        });

        onSubmit && onSubmit(data);
    }

    handleChange(file, type) {

        let files = this.state.files;

        let newFile = {
            type,
            file
        };

        this.setState({
            files: [...files, newFile]
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Excel</label>
                <UploadChangeFileInput onChange={this.handleChange} type="excel"/>
                <label>Zip</label>
                <UploadChangeFileInput onChange={this.handleChange} type="zip"/>
                <button type="submit" >{this.props.label}</button>
            </form>
        )

    }
}

UploadChange.defaultProps = {
    onData: function() {},
    label: 'Upload'
};

export default UploadChange;