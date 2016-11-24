import React, {Component} from 'react'
import TaskModel from './TaskModel'
import ListItems from './ListItems'

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
            files: null
        }

        this.handleFilesSubmit = this.handleFilesSubmit.bind(this)
        this.handleFilesChange = this.handleFilesChange.bind(this)
    }

    render() {
        const { newItems } = this.state;
        return (
            <div>
                <form onSubmit={this.handleFilesSubmit}>
                    <label>Excel files (price lists)</label>
                    <UploadFileInput onChange={this.handleFilesChange} />
                    <button type="submit" >Upload pricelists</button>
                </form>

                {newItems && <ListItems items={newItems} />}
            </div>
        )
    }

    handleFilesChange(files) {
        console.log(files);
        this.setState({
            files
        })
    }

    handleFilesSubmit(e) {
        let data = new FormData();
        const { files } = this.state

        e.preventDefault();

        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            data.append('excel', file);
        }

        TaskModel.create(data)
            .then(({ items }) => {
                this.setState({
                    newItems: items
                })
            })
    }
}