import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SolutionBox from '../../components/SolutionBox/SolutionBox';
import { supabase } from '../../supabaseClient';

export default function Solutions({ session }) {
    const [loading, setLoading] = useState(true)
    const [apiData, setApiData] = useState([]);


    useEffect(() => {
        getSolutions()
        getSolutionServices()
    }, [])


    if (loading) {
        return <div>Loading...</div>;
    }

    async function getSolutions() {
        try {
            setLoading(true)
            let { data, error, status } = await supabase
                .from('solution')
                .select(`*`)
                .eq('id', 81)

            if (error && status !== 406) {
                throw error
            }
            if (data) {
                setApiData(data);
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function getSolutionServices() {
        const solutionId = process.env.REACT_APP_SOLUTION_ID;
        try {
            setLoading(true)

            const query = `
                id,
                config,
                solution(*),
                service(*)
            `
            const { data, error, status } = await supabase.from('solution_services').select(query).eq('solutionId', solutionId);

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setApiData(data);
            }

        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {apiData && apiData.map((item, index) => (
                <Grid item xs={6} key={index} >
                    <Link
                        to={{
                            pathname: `/solutions/${item.id}`,
                            state: { Solution: item.service ? JSON.parse(item.service.api) : {} }
                        }}
                    >
                        <SolutionBox item={item} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

