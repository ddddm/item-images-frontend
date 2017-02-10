/**
 * Created by dima on 09.11.16.
 */

import React, {Component} from 'react';
import {Form, FormField, FileUpload } from 'elemental';
import ViButton from './ViButton';

function UploadChangeFileInput(props) {

    return props.type && props.onChange? (
        <FileUpload onChange={ (e, { file } ) => {
            props.onChange(
                file,
                props.type
            )
        }} />

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
            <Form type={'horizontal'} component='form'>
                <FormField label="Excel file">
                    <UploadChangeFileInput onChange={this.handleChange} type="excel"/>
                </FormField>

                <FormField label="Images file (zip)">
                    <UploadChangeFileInput onChange={this.handleChange} type="zip"/>
                </FormField>

                <ViButton onClick={this.handleSubmit} label={this.props.label} />
            </Form>
        )

    }
}

UploadChange.defaultProps = {
    onData: function() {},
    label: 'Upload'
};

export default UploadChange;
