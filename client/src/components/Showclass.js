const Showclass = () => {

    const classDataLocal = JSON.parse(localStorage.getItem('myClassData')) || '';

    const handleClick=()=>alert('Lesson not avaliable in demo version')

    return (
        <div className="showclass" style={{ paddingTop: 50, paddingLeft: 20, paddingRight: 20,display:'flex',flexDirection:'column',alignContent:'center'}}>
            <img src={classDataLocal.img} alt="..." class="img-thumbnail w-75" style={{ maxWidth: 700,margin:'auto' }}></img>
            <h5 class="m-auto my-3">{classDataLocal.title}</h5>
            <div class="list-group">
                <div class="w-75 m-auto" style={{ maxWidth: 700 , minWidth:200}}>
                    <button  class="list-group-item list-group-item-action active">All Lesson</button>
                    <button  class="list-group-item list-group-item-action" onClick={handleClick}>01: Lorem ipsum dolor sit amet.</button>
                    <button  class="list-group-item list-group-item-action" onClick={handleClick}>02: Lorem ipsum, dolor sit amet consectetur adipisicing.</button>
                    <button  class="list-group-item list-group-item-action" onClick={handleClick}>03: Lorem ipsum dolor sit.</button>
                    <button  class="list-group-item list-group-item-action" onClick={handleClick}>04: Lorem, ipsum dolor sit amet consectetur adipisicing elit.</button>
                </div>
            </div>
        </div>
    )
}

export default Showclass;