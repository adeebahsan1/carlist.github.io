function App() {
  let cars = ["BMW", "Audi", "Nexa", "Honda", "Maruti"];
  return (
    <>
      <h1>List of cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
