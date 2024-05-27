import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

// const GET_DOG_PHOTO = gql`
// query Dog(${breed: String!}){
//   dog(breed: $breed){
//     id
//     displayImage
//   }
// }`

// function DogPhoto({breed}){
//   const {loading, error, data} = useQuery(GET_DOG_PHOTO, {
//     variables: {breed}
//   });

//   if(loading) return null
//   if(error) return `Error! ${error}`

//   return (
//     <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
//   );

// }

// function Dogs({ onDogSelected }) {
//   const { loading, error, data } = useQuery(GET_DOGS);
//   if (loading) return "Loading...";
//   if (error) return `Error: ${error.message}`;

//   return (
//     <select name="dog" onChange={onDogSelected}>
//       {data.dogs.map((dog) => {
//         return (
//           <option key={dog.id} value="dog.breed">
//             {dog.breed}
//           </option>
//         );
//       })}
//     </select>
//   );
// }

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img src={`${photo}`} alt="location-reference" width={400} height={250} />
      <br />
      <b>About this location</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>My first apollo app</h2>
      <br />
      <DisplayLocations />
    </div>
  );
}

export default App;
