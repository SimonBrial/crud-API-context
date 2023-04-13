import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { nanoid } from 'nanoid';

const CreateUser = () => {

    const { users, userForUpdate, addUser, updateUser } = useContext(UserContext);
    const [user, setUser] = useState({
        id: nanoid(5),
        name: '',
        last: '',
    });

    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const [idUpdate, setIdUpdate] = useState(false);

    const styles = {
        form: {
            border: '1px solid red',
            borderRadius: '8px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
        },
        div1: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        div2: {
            margin: '10px',
        },
        label: {
            margin: '10px',
            textTransform: 'uppercase',
        },
        btn: {
            margin: '0 10px',
        }
    }
    /* console.log(users);
    console.log(userForUpdate); */

    useEffect(() => {
        if (userForUpdate && userForUpdate !== '') {
            const userFound = users.find(user => user.id === userForUpdate)
            console.log(userFound)
            setIdUpdate(true)
            setName(userFound.name)
            setLast(userFound.last)
            setUser({
                id: userFound.id,
                name: userFound.name,
                last: userFound.last,
            })
            updateUser(userFound)
        } else {
            setName('')
            setLast('')
        }
    }, [userForUpdate])



    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && last !== '' && !userForUpdate) {
            const newUser = {
                id: nanoid(5),
                name: name,
                last: last,
            }
            addUser(newUser);
            setName('')
            setLast('')
        } else if (name !== '' && last !== '' && userForUpdate) {
            const userUpdated = {
                id: userForUpdate,
                name: name,
                last: last,
            }
            console.log(userUpdated)
            updateUser(userUpdated);
            setName('')
            setLast('')
            setIdUpdate(false)
        }
    }

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleLast = (e) => {
        setLast(e.target.value);
    };


    return (
        <div>
            <h1>API CONTEXT - REACT</h1>
            <form style={styles.form}>
                <div style={styles.div1}>
                    <p>{idUpdate ? userForUpdate : ''}</p>
                    <div style={styles.div2}>
                        <label style={styles.label}>Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <label style={styles.label}>Lastname:</label>
                        <input
                            type='text'
                            name='last'
                            value={last}
                            onChange={handleLast}
                        />
                    </div>
                </div>
                <button type='submit' style={styles.btn} onClick={handleSubmit}>
                    {(idUpdate) ? 'Edit user' : 'Create user'}
                </button>
            </form>
        </div>
    )
}

export default CreateUser