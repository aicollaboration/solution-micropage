
import { useState, useEffect } from 'react'
// import SelectDropDown from './atoms/DropDown/SelectDropDown';
// import InputField from './atoms/InputField/InputField';
import OpenApi from './components/OpenApi/OpenApi';
import { supabase } from './supabaseClient'

export default function Solutions({ session }) {
    const [loading, setLoading] = useState(true)
    const [apiData, setApiData] = useState([]);
    const [selectedData, setSelectedData] = useState({});


    useEffect(() => {
        getSolutionServices()
    }, [session])


    if (loading) {
        return <div>Loading...</div>;
    }

    async function getSolutionServices() {
        const solutionId = 57;
        try {
            setLoading(true)

            const query = `
        id,
        config,
        solution(*),
        service(*)
        `;

            const { data, error, status } = await supabase.from('solution_services').select(query).eq('solutionId', solutionId);


            if (error && status !== 406) {
                throw error
            }

            if (data) {
                // console.log(data, "data");
                setApiData(data);
            }

        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    // const testDropdown = [
    //     { label: "red", value: "red" },
    //     { label: "blue", value: "blue" },
    //     { label: "green", value: "green" }];

    return (

        <div className="form-widget">

            {/* {JSON.stringify(data)} */}


            {apiData && apiData.map((item, index) => (
                < div className="card" key={index} onClick={e => setSelectedData(item.service ? JSON.parse(item.service.api) : {})}>
                    <div> #:{item.id} </div>
                    <div> Service Name:{item.service ? item.service.name : ""} </div>
                    <br />
                    {/* <div> Service Name:{item.service ? item.service.api : ""} </div> */}
                    <br />
                    {/* <SelectDropDown
                        handleInputchange={handleInputchange}
                        name="report_type"
                        data={testDropdown}
                        label={"color"}
                    /> */}


                    <div> Solution Name:{item.solution ? item.solution.name : ""} </div>

                </div>
            ))}


            <OpenApi session={session} selectedData={selectedData} />


        </div>

    )
}

