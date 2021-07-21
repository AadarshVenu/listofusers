import ListofUsers from "./ListofUsers";
import './List.css';


const SecondList = (props) => {
    return (
        <ol className='users' >
            {props.user.map((users) => (
                <ListofUsers
                    key={users.id}
                    id={users.id}
                    email={users.email}
                    firstname={users.firstname}
                    lastname={users.lastname}
                    image={users.image}
                />
            ))}
        </ol>
    );
};

export default SecondList;
