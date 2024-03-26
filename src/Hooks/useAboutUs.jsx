import { useEffect, useState } from "react";


const useAboutUs = () => {
    const [about, setAbout] = useState([])
    useEffect(()=>{
        const fetChData = async ()=> {
            const res = await fetch("/company.json")
            const data = await res.json()
            setAbout(data)
        }
        fetChData();
    }, [])
    return {about};
};

export default useAboutUs;