import React from "react";

const UserListDebounce = (props) => {
    return (
        <div>
            {props.users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserListDebounce;
