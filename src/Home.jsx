

import { Link } from "react-router-dom";
const Home = ({data}) => {
  
  //El key=item._id se relaciona con la base de datos donde _id es el id 
  //que por defecto te da mondodb
  return (
    <>
    <h1>Lista de datos</h1>
    <ul>
      {data.map(item=>(
<li key={item._id}>
<Link to= { `/${item._id}`}> {item.title} </Link>
</li>

      ))}
    </ul>
    </>
  )
};

export default Home;
