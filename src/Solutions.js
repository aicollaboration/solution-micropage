
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import OpenApi from './components/OpenApi/OpenApi';
import SolutionBox from './components/SolutionBox/SolutionBox';
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

    const handleClick = (_item) => {
        setSelectedData(_item)
    }

    return (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {apiData && apiData.map((item, index) => (
                        <Grid item xs={6} key={index} onClick={e => handleClick(item.service ? JSON.parse(item.service.api) : {})}>
                                <SolutionBox item={item} />
                        </Grid>
                ))}
            <OpenApi session={session} selectedData={selectedData} />
            </Grid>
    )
}

