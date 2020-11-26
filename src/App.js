import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./requests";
import UseEffectTest from "./ComponentTraining/UseEffectTest";

function App() {
  return (
    <>
      <div className="App">
        {/* navbar */}
        <Banner />

        {/* <UseEffectTest name="romie" age="25"/> */}
        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Moview" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romantice Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default App;
