import Delete from './Delete';
// import Edit from './Edit';
import Checkbox from './Checkbox';
import './TaskInfo.css';



function TaskInfo(props) {

    return (
        <div className="task-info">
            <div>
                <Checkbox />
                <input type="checkbox" id={props.id} />
                <label id={props.id}> {props.input} </label>
            </div>
            <div className='change'>
                {/* <Edit id={props.id} /> */}
                <Delete id={props.id} />
            </div>
        </div >
    )
}


export default TaskInfo;