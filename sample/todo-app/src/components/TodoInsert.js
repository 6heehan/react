import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onIsert }) => {

    const[value, setValue] = useState('');

    const onChange = useCallback(e=> {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            onIsert(value);
            setValue('');

            e.preventDefault();
        },
        [onIsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요" 
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;