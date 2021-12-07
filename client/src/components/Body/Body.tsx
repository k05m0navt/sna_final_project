import { fetchActivity, IData } from "../../api/fetchActivity";
import { useState, useEffect } from "react";
import Button from "../Button";

interface Props {}

const Body = (props: Props) => {
    const [data, setData] = useState<IData>();
    const [, setIsClicked] = useState<boolean>(false);
    const [, setClicks] = useState<number>(0);

    const getData = async () => {
        const json = await fetchActivity();
        setData(json);
    };

    const onClick = () => {
        setData({ message: "" });
        setClicks((clicks) => clicks + 1);
        setIsClicked((prev) => !prev);
        getData();
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <main className="flex flex-col justify-center items-center mt-10 mb-10 bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md h-full max-h-52">
            <div className="mb-4">
                {data?.message && <p className="text-xl">{data?.message}</p>}
            </div>
            <Button onClick={onClick} text="New activity" />
        </main>
    );
};

export default Body;
