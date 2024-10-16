export default function HelloWorld(){
    const list=[
        {
        name:"Henry",
        age:18      ,
        school:"Senai"
    },
    {
        name:"eliz",
        age:20,
        school:"sesc"
    }    
]


    const MapPeople =({people})=>{
        return people.map((ps,index)=>
        <div key={index}>
            <h1>{ps.name}</h1>
            <h2>{ps.age}</h2>
            <h3>{ps.school}</h3>
        </div>
        )
    }
    return( 
        <>
            <MapPeople people={list}/>
        </>
        )
}