// import { lazy } from "react";
import RerenderCallback from "./rerender/RerenderCallback";

// const LazyInputDebounce = lazy(() => import("./debounce/InputDebounce"));
// const LazyThrottling = lazy(() => import("./throttling/Throttling"));

function App() {
    return (
        <div>
            {/* <LazyInputDebounce /> 
            <LazyThrottling /> */}
            <RerenderCallback />
        </div>
    );
}

export default App;
