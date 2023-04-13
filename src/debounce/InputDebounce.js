import React, { useCallback, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import axios from "axios";
import UserListDebounce from "./UserListDebounce";

const InputDebounce = () => {
    const [value, setValue] = useState("");
    const [users, setUsers] = useState([]);

    const searchUsers = useDebounce(async (value) => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
    }, 500);

    const changeHandler = useCallback(
        async (event) => {
            setValue(event.target.value);
            searchUsers(event.target.value);
        },
        [searchUsers]
    );

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={changeHandler}
                placeholder="Поиск"
            ></input>
            <UserListDebounce users={users} />
        </div>
    );
};

export default InputDebounce;
