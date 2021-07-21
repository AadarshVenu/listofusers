import { useState } from "react";
import SecondList from "./SecondList";
import { Button } from "@material-ui/core";
import "./ListPage.css";

const SecondPage = () => {
    const [users, setUsers] = useState([]);

    const SecondPageUsers = async () => {
        const response = await fetch("https://reqres.in/api/users?page=2");

        const users = await response.json();

        // console.log(users);

        const usersList = users.data.map((user) => {
            return {
                key: user.id,
                id: user.id,
                email: user.email,
                firstname: user.first_name,
                lastname: user.last_name,
                image:user.avatar 
            };
        });

        // console.log("1", usersList);
        setUsers(usersList);
    };

    return (
        <div className="button">
            <br></br>

            <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={SecondPageUsers}
            >
               Users from Page 2
            </Button>
            <SecondList user={users} />
        </div>
    );
};

export default SecondPage;
