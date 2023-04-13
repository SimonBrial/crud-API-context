import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { nanoid } from 'nanoid';

const CreateUser = () => {

    const { users, addUser, updateUser } = useContext(UserContext);
    //console.log(users);

    /* useEffect((id) => {
        const userFound = users.find(user => user.id === id)
        console.log(userFound)
    }, []) */


    const [user, setUser] = useState({
        id: nanoid(5),
        name: '',
        last: '',
    });

    const [name, setName] = useState('');
    const [last, setLast] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && last !== '') {
            console.log(`Tengo un usuario: ${name} ${last}`)
            setUser({
                id: nanoid(5),
                name: name,
                last: last,
            })
            //console.log(user)
            addUser(user);
            setName('')
            setLast('')
        } else {
            console.log(' no tengo usuario')

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
                    Add
                    {/*!user ? 'Create user' : 'Edit user' */}
                </button>
            </form>
        </div>
    )
}

export default CreateUser