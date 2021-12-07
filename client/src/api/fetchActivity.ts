import axios from "axios";

const ENDPOINT = "http://localhost:3001/api/find_new_activity";

export interface IData {
    message: string;
}

export const fetchActivity = async () => {
    const data: IData = await axios.get(ENDPOINT).then((res) => {
        return res.data;
    });
    return data;
};
