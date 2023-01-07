import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    
    const addCard = async(options="") => {
        const response = await axios.get(`${url}${options}`);
        setCards(cards => [...cards, {...response.data, id:uuid() }])
    }

    const clearCards = () => setCards([]);

    return [cards, addCard, clearCards];
}

export default useAxios;