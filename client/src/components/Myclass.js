import { UserLocalContext } from "../App";
import { useContext } from "react";

const MyClass = () =>{

    const { userDataLocal } = useContext(UserLocalContext)

    const handleShowClass = (id) =>{
        fetch(`/showclass/${id}`)
        .then(res=>res.json())
        .then(data=>{
            localStorage.setItem('myClassData',JSON.stringify(data))
            window.location.href = '/showclass/'
        })
    }

    return (
        <div className="myclass" style={{ paddingTop: 50, paddingLeft: 20, paddingRight: 20 }}>
            <p style={{ textAlign: 'center', fontSize: 30 }} class="mt-3 mb-1">{`${(userDataLocal.username).toUpperCase()} classroom`}</p>
            <div className="homepage__card--control">
                {userDataLocal.classroom.map((item,index) => {
                    return (
                        <div class="card my-3" key={index}>
                            <img class="card-img-top" src={item.img} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, fugiat aliquam non accusantium labore deleniti?</p>
                                <button onClick={()=>handleShowClass(item._id)} class="btn btn-success">View Lesson</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyClass;