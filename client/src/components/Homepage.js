import { UserLocalContext } from "../App";
import { useContext, useEffect, useState } from "react";
import './Homepage.css'
import axios from 'axios'
const Homepage = () => {

    const { userDataLocal,setUserDataLocal } = useContext(UserLocalContext)
    const [classesData, setClassesData] = useState([])

    useEffect(() => {
        fetch('/getclass')
            .then(res => res.json())
            .then(data => setClassesData(data))
    },[])

    const handleRegisterClass = (e,classData,index) =>{
        e.preventDefault();
        let packedData = { user_id : userDataLocal._id , classData : classData}
        axios.post('/addclass',packedData)
        .then(res=>{
            localStorage.setItem('userLocal',JSON.stringify(res.data))
            setUserDataLocal(res.data)
        })
    }
    
    return (
        <div className="homepage" style={{ paddingTop: 50, paddingLeft: 20, paddingRight: 20 }}>
            <p style={{ textAlign: 'center', fontSize: 30 }} class="mt-3 mb-1">{`Welcome ${(userDataLocal.username).toUpperCase()}`}</p>
            <div className="homepage__card--control">
                {classesData.map((item,index) => {
                    return (
                        <div class="card my-3" key={index}>
                            <img class="card-img-top" src={item.img} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, fugiat aliquam non accusantium labore deleniti?</p>
                                <a href="/" class="btn btn-primary" onClick={(e)=>{handleRegisterClass(e,item,index);alert('Added to My Class')}}>Register</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage;