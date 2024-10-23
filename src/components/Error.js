import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="bg-gray-800 text-white">
            <h1>{err.status}: {err.statusText}</h1>
        </div>
    )
}

export default Error