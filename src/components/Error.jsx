import { useRouteError } from "react-router-dom";
const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (

        <div>

            <h4>Opps...!! Something Went Wrogn  Vijay...</h4>
            <h3>{err.status} : {err.statusText}</h3>

        </div>
    )
}


export default Error;