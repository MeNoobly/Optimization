import React, { useCallback, useState } from "react";

const SomeComponent = React.memo(({ increment }) => {
    console.log("Render SomeComponent");

    return (
        <div>
            <button onClick={increment}>INCREMENT</button>
        </div>
    );
});

const RerenderCallback = () => {
    const [count, setCount] = useState(0);

    console.log("Render Main");

    const increment = useCallback(() => setCount((prev) => prev + 1), []);

    return (
        <div>
            <h1>{count}</h1>
            <SomeComponent increment={increment} />
        </div>
    );
};

export default RerenderCallback;
