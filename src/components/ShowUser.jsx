import { useState,useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ShowUser = () => {

    const { users, updateUser, deleteUser } = useContext(UserContext);
    const [datos, setDatos] = useState();

    const handleEdit = (user) => {
        updateUser(user);
        if (user) {
            setDatos(user)
        }
    };
    //console.log(datos)


    const stylesContainer = {
        border: '1px solid red',
        borderRadius: '8px',
        padding: '1rem',

        div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid red',
            padding: '1rem',
            margin: '0.5rem',
            borderRadius: '8px',

            description: {
                display: 'flex',

                p: {
                    margin: '1rem',
                    textTransform: 'uppercase',

                    span: {
                        color: '#27f0d2'
                    }
                }
            },
            btn: {
                margin: '0 0.5rem',
            }
        },
    }

    return (
        <main style={stylesContainer}>
            {
                users.map(user => (
                    <div style={stylesContainer.div} key={user.id}>
                        <div style={stylesContainer.div.description}>
                            <p style={stylesContainer.div.description.p}>
                                ID: <span style={stylesContainer.div.description.p.span}>{user.id}</span>
                            </p>
                            <p style={stylesContainer.div.description.p}>
                                Name: <span style={stylesContainer.div.description.p.span}>{user.name}</span>
                            </p>
                            <p style={stylesContainer.div.description.p}>
                                Last name: <span style={stylesContainer.div.description.p.span}>{user.last}</span>
                            </p>

                        </div>
                        <div>
                            <button style={stylesContainer.div.btn} onClick={() => handleEdit(user)}>Edit</button>
                            <button style={stylesContainer.div.btn} onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}

export default ShowUser

/*


    <div style={stylesContainer.div} key={user.id}>
        <div style={stylesContainer.div.description}>
            <p style={stylesContainer.div.description.p}>
                ID: <span style={stylesContainer.div.description.p.span}>{user.id}</span>
            </p>
            <p style={stylesContainer.div.description.p}>
                Name: <span style={stylesContainer.div.description.p.span}>{user.name}</span>
            </p>
            <p style={stylesContainer.div.description.p}>
                Last name: <span style={stylesContainer.div.description.p.span}>{user.last}</span>
            </p>

        </div>
        <div>
            <button style={stylesContainer.div.btn}>Edit</button>
            <button style={stylesContainer.div.btn}>Delete</button>
        </div>
    </div>
*/