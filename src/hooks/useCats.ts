import {useMemo} from "react";
import {ICat} from "../types/types";

export const useCats = (cats: ICat[], query: string) => {
    const filterCats = useMemo( () => {
        return cats.filter(cat => cat.name.toLowerCase().includes(query.toLowerCase()))
    }, [cats, query])

    return filterCats;
}
