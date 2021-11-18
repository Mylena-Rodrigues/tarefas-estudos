import axios from 'axios';
export const fetchTasks = async () => {
    const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
    console.log(data)
    return data;
}
