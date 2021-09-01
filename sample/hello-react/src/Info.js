import {useEffect, useReducer, useState} from 'react';
import useInputs from './useInputs';

/*
const Info = () => {
    const[name, setName] = useState('');
    const[nickName, setNickName] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name)
        return () => {
            console.log('cleanup')
            console.log(name);
        }
    },[name]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                    <div>
                        <b>이름:</b> {name}
                    </div>
                    <div>
                        <b>닉네임:</b> {nickName}
                    </div>
            </div>
        </div>
    );
};
*/
/*
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target);
        console.log(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    );
};
*/

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름</b> {name}
                </div>
                <div>
                    <b>닉네임</b> {nickname}
                </div>
            </div>
        </div>
        

    );
};

export default Info;