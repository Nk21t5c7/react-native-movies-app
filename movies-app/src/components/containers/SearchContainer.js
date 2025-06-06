import { View } from "react-native";
import Form from "../form/Form";
import { useState } from "react";
import Loading from "../layout/Loading";
import SearchList from "../list/SearchList";
import {searchContent} from '../services/api'



const SearchContainer = () => {
    const [type, setType] = useState('multi');
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    const handleInputChange = (input) => {
        setInput(input);
    }

    const handleTypeChange = (type) => {
        setType(type);
    }

    const fetchData = async () => {
        setLoading(true);
        await searchContent(input, type)
            .then((result) => {
                console.log(result);
                setList(result);
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false);
            })
    }

    return (
        <>
            <Form
                onInputChange={handleInputChange}
                onTypeChange={handleTypeChange}
                onSubmit={fetchData}
                type={type}
            />

            {loading ? <Loading /> : <SearchList list={list} input={input} />}

        </>
    )
}

export default SearchContainer;