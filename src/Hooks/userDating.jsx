import React, { useEffect, useState } from "react";

export default function useDatingProfileData() {
    const [dateData, setDateData] = useState(() => {
        let currentDateData;
        try {
            currentDateData = JSON.parse(localStorage.getItem("DateProfileData"));

        } catch (Error) {
            console.log(Error);
        }
        return currentDateData;
    })


    useEffect(() => {
        localStorage.setItem("DateProfileData", JSON.stringify(dateData))
    }, [dateData])

    return [dateData, setDateData];
}
