import { useContext, useEffect, useState } from 'react';
import styles from './Notification.module.css'
import DataContext from '../store/data-context';



function Notification(props) {


    const dataContx = useContext(DataContext);
    let msg = dataContx.notification;
    let flag = dataContx.notification[1];
    // console.log(flag);


    const [message, setMessage] = useState('');


    useEffect(() => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 1000);
    }, [flag, msg]);


    return (
        <div className={`${styles.notification} ${message.length === 0 ? styles.hide : ''}`} > {message}</div >
    );
}


export default Notification;