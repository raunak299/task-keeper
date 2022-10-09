import Delete from './Delete';
// import Edit from './Edit';
import Checkbox from './Checkbox';
import './TaskInfo.css';



function TaskInfo(props) {

    return (
        <div className="task-info">
            <div>
                <Checkbox id={props.id} />
                <input type="checkbox" id={props.id} />
                <label id={props.id}> {props.input} </label>
            </div>
            <div className='change'>
                <Delete id={props.id} />
            </div>
        </div >
    )
}


export default TaskInfo;