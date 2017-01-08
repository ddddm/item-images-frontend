import React, {Component} from 'react'
import TaskModel from '../TaskModel'
import ListItems from '../ListItems'
import ViFileDownload from './../ViFileDownload'
import ViButton from './../ViButton';
import {Form, FormField, Spinner, FileDragAndDrop} from 'elemental';

function UploadFileInput(props) {

    return props.onChange? (
        <input multiple type="file" onChange={e => {
            props.onChange(
                e.target.files
            )
        }}/>
    ) : null
}

export default class CreateTaskView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            files: null,
            loading: false
        }

        this.handleFilesSubmit = this.handleFilesSubmit.bind(this)
        this.handleFilesChange = this.handleFilesChange.bind(this)
    }

    render() {
        const { newItems, loading } = this.state;
        const taskFileURI = TaskModel.getFileURI(this.state.taskFileName);
        return (
            !loading? (<div>
                <Form>
                    <FormField label="Excel files (price lists)">
                        <FileDragAndDrop onDrop={(files) => {this.handleFilesChange(files)}} />
                    </FormField>
                    <FormField>
                        <ViButton onClick={this.handleFilesSubmit} label="Upload pricelists"/>
                    </FormField>

                </Form>
                {taskFileURI && <ViFileDownload assetUri={taskFileURI} />}

                {newItems && <ListItems items={newItems} />}
            </div>) : (
                <Spinner size="lg" />
            )
        )
    }

    handleFilesChange(files) {
        this.setState({
            files
        })
    }

    handleFilesSubmit(e) {
        let data = new FormData();
        const { files } = this.state

        e.preventDefault();

        this.setState({loading: true})

        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            data.append('excel', file);
        }

        TaskModel.create(data)
            .then(({ items, file_path }) => {
                this.setState({
                    taskFileName: file_path,
                    newItems: items,
                    loading: false
                })
            })
    }
}