import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

function TableauBord() {
  const [ressources, setRessources] = useState({});
  const [warehouse, setWarehouses] = useState([]);
  const [ships, setShips] = useState({});
  useEffect(() => {
    getWarehouses().then((result) => setWarehouses(result));
    getRessources().then((result) => setRessources(result));
    getShips().then((ships) => setShips(ships));
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center vh-50">
      {" "}
      <div className="container m-5">
        <Header />

        <div className="row m-3">
          <div className="col-md-12 mb-12">
            <Card className="text-center">
              <Card.Header className="py-0">
                <h1 className="orbitron">Your Resources:</h1>
              </Card.Header>
              <Card.Body>
                <ViewRessources ressources={ressources} />
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-6 mb-3">
            <Card className="text-center">
              <Card.Header className="py-0">
                <h1 className="orbitron">Your ships:</h1>
              </Card.Header>
              <Card.Body>
                <Ships type={"fighter"} ships={ships} />
                <Ships type={"frigate"} ships={ships} />
                <Ships type={"cruiser"} ships={ships} />
                <Ships type={"destroyer"} ships={ships} />
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-3">
            <Card className="text-center px-0 pt-2 pb-1">
              <h1 className="orbitron">
                Warehouse :{" "}
                <span>
                  <ViewWarehouse warehouse={warehouse} />
                </span>
              </h1>
            </Card>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-12 mb-3">
            <Card.Body
              className="py-0 opacity-1"
              style={{
                backgroundImage: 'url("/src/components/img/radar.gif")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                opacity: 0.7,
              }}
            >
              <Card.Header className="py-0">
                <h1 className="orbitron">You are here:</h1>
              </Card.Header>
              <Card.Body>
                <MapUser />
              </Card.Body>
            </Card.Body>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TableauBord;
