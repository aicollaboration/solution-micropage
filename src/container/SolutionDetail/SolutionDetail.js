import React,{useEffect,useState} from 'react'
import OpenApi from '../../components/OpenApi/OpenApi';

export default function SolutionDetail({location}) {
    const [selectedData, setSelectedData] = useState({});
    
    const callRedirect=()=>{
        console.log("redirect function");
    }

    useEffect(() => {
        if(location && location.state && location.state.Solution){
        setSelectedData(location.state.Solution);
        }else{
            callRedirect();
        }
       
    }, [])

    return (
     <OpenApi selectedData={selectedData} />
    )
}

