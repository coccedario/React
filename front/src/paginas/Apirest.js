import { useFetch } from "../useFetch";


function Apirest() {

  //  const { data } = useFetch("https://jsonplaceholder.typicode.com/users")
   const { data } = useFetch("http://localhost:3000/hello")
console.log(data);

    return (
        <div>
            <h1>Listado de clientes</h1>


            <ul>

                {data?.map((user) => (

                    <li>{user.name}</li>

                )
                )}
            </ul>

        </div>
    );

}

export default Apirest;