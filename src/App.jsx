function App() {
 const cities = ['Dhaka', 'Rajshahi', 'Khulna','Brammanbaria'];
  return (
   <div>
      <h2>Grading System </h2>
      <ul>
        {
          cities.map((city, i)=> {
            return <li key={i.toString()}>{city}</li>
          })
        }
      </ul>
   </div>
  )
}

export default App
