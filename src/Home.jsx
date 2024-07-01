import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from 'axios'

const Home = () => {

     const checkoutHandler = async(amount)=>{
      
        const {data:{key}} = await axios.get('https://razorp-api-tikam.onrender.com/api/getkey');

       const {data:{order}} = await axios.post("https://razorp-api-tikam.onrender.com/api/checkout",{
        amount
       })
      
       const options = {
        key, 
        amount: order.amount,
        currency: "INR",
        name: "Tikam Singh corp",
        description: "Test Transaction of Razorpay",
        image: "https://avatars.githubusercontent.com/u/89627542?v=4",
        order_id: order.id, 
        callback_url: "https://razorp-api-tikam.onrender.com/api/paymentverification",
        prefill: {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    var razor = new window.Razorpay(options);
   
        razor.open();

    }

  return (
    <Box>
        <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
            <Card amount={5000} img={"https://www.pngitem.com/pimgs/m/133-1333804_free-macbook-pro-png-images-apple-laptop-images.png"} checkoutHandler={checkoutHandler}/>
            <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
        </Stack>
    </Box>
  )
}

export default Home