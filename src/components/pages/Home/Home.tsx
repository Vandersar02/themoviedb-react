import Sidebar from "../../layout/Sidebar/Sidebar";
import Card from "../../layout/Card/Card";

const Home = () => {
  return (
    <>
      <div className="sidebar-content">
        <Sidebar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Welcome to the Nope Movie Database</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Card
              image="https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
              rating={8.2}
            />
          </div>
          <div className="col-md-6">
            <Card
              image="https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
              rating={8.2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
