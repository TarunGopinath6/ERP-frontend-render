import useIdentStore from "./../../storages/IdentStore";
import { useState, useEffect } from "react";
import NoPage from "./NoPage";

export default function RequireAuth({ children }) {

    const { getGroup } = useIdentStore();
    const [status, setStatus] = useState(null);

    useEffect(() => {
        async function check() {
            let group = await getGroup();
            if (group === "admin") { setStatus(true); }
            else { setStatus(false) }

        }
        check()
    }, [])


    return (
        status !== null ? (
            status === true ?
                children :
                <NoPage text={"Only can login in to the website. Use app if not admin."} />
        ) :
            <></>
    )
}