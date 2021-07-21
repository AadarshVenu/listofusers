import "./ListofUsers.css";

const ListofUsers = (props) => {
    return (
        <div className='users'>
            <li className="card">
                <p className="name">
                    {props.id}. {props.firstname} {props.lastname}
                </p>
                <p className="email"> Email : {props.email}</p>
                <img src={props.image} alt='user_image' />
            </li>
        </div>
    );
};

export default ListofUsers;
