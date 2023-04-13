import React, { useCallback, useEffect } from "react";
import { useThrottle } from "../hooks/useThrottle";

const Throttling = () => {
    const callback = useCallback(() => console.log("Движение мыши"), []);
    const throttleMouseMove = useThrottle(callback, 1000);

    useEffect(() => {
        document.addEventListener("mousemove", throttleMouseMove);

        return () =>
            document.removeEventListener("mousemove", throttleMouseMove);
    });

    return (
        <div>
            <h1>Приложение, отслеживающее движение мыши</h1>
        </div>
    );
};

export default Throttling;
