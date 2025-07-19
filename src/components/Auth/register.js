import { useState, useEffect } from "react";
import axios from "axios";

function Register(){
    const [registrations, setregistrations] = useState([]);
    const [users, setusers] = useState([]);
    const [email, setemail] = useState("");
    const [loading, setLoading] = useState(true);
   

    const fetchData = async () => {
        try{
            const [regRes, userRes] = await Promise.all([
                axios.get('user/register'),
                axios.get('user/profile')
            ])

            setregistrations(Array.isArray(regRes.data) ? regRes.data: []);
            setusers(
                Array.isArray(userRes.data) ? userRes.data.users : []
            );
        }catch(error){
            console.error("error in fetch data:", error);
            alert('request')
        }
    };

    const handleRegister = async() => {
        if(!email){
            alert("please fill all field...!")
            alert;
        }
        try{
            const response = await axios.post("/register/register", {
                name:name,
                email:email,
                password:password,
                status:status
            });
            alert("Registed success");
            setemail("");
            fetchData("")
            
        }catch(error){
            console.log(error);
            alert(error.message)
        }
    };
}
