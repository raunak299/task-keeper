import './Delete.css'
import DataContext from '../store/data-context';
import { useContext } from 'react';

function Delete(props) {

    const dataContx = useContext(DataContext);
    const onDeleteHandler = () => {
        console.log(props.id);
        dataContx.onDeleteTask(props.id);
    }

    return (
        <div onClick={onDeleteHandler}>
            <img className='delete-icon' src='https://cdn-icons.flaticon.com/png/512/2874/premium/2874821.png?token=exp=1655881842~hmac=908a877ce707ddad294ba9863ad44e19' alt='delete' />
        </div>
    );
}

export default Delete;