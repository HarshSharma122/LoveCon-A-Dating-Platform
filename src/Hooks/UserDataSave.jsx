import React, { useEffect, useState } from 'react'
function useDataSave() {
    const [data, setdata] = useState(() => {
        let currentvalue;
        try {
            currentvalue = JSON.parse(localStorage.getItem("currentData"));
        } catch (error) {
            console.log(error);
        }
        return currentvalue;
    });

    useEffect(() => {
        localStorage.setItem("currentData", JSON.stringify(data));
    }, [data])
    return [data, setdata]

}

export default useDataSave
