import React, { useMemo, useState } from "react";

// const SomeComponent = React.memo((props) => {
//     console.log("Render SomeComponent");
//     return <h1>Дочерний компонент</h1>;
// });

const SomeComponent = React.memo(({ list }) => {
    console.log("Render SomeComponent");
    return (
        <div>
            {list.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
});

const getList = () => [1, 2, 3];

const Rerender = () => {
    const [count, setCount] = useState(0);
    // const [list, setList] = useState([1, 2, 3]);
    const list = useMemo(() => getList(), []);

    console.log("Render MainComponent");

    const increment = () => setCount(count + 1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>INCREMENT</button>
            <SomeComponent list={list} />
        </div>
    );
};

export default Rerender;
