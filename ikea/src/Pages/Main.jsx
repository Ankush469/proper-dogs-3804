import { Grid, GridItem,Image } from '@chakra-ui/react'
import { useState,useEffect } from 'react';
import axios from "axios"

function Main(){
    const[data,setData]=useState([]);

   const getData=async()=>{ 
        const prod=await axios.get(`http://localhost:8080/posts`)
        console.log(prod)
        setData(prod.data)
    }
    useEffect(()=>{
       getData();
    },[])
    return <div>
            <Grid  columns={2} width={'auto'} gap={6} margin={100}>
                {data.map((e)=>(<GridItem w='100%' h='10' key={e.id}><Image src={e.img} alt={e.name}/></GridItem>))}
                
                
            </Grid>
    </div>
}

export default Main;