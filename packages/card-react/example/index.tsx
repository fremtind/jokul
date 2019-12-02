import React from "react";
import ReactDOM from "react-dom";
import { Card } from "../src";
import car from "./img/car.jpg";
import grass from "./img/grass.jpg";

function handleClick() {
    console.log("This is working");
}

const CardDemo = () => (
    <>
        <Card title="Basic Card" clickable={{ href: "https://fremtind.github.io/jokul/" }} className="test-class">
            <h2 className="jkl-h4">Clickable</h2>
            <p className="jkl-p">
                Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan
                behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
            </p>
        </Card>

        <br></br>

        <Card
            title="Kjøp bilforsikring"
            media={{
                src: car,
                alt: "Driving",
            }}
        ></Card>
        <br></br>

        <Card
            title="Meld skade av mobil eller nettbrett"
            action={{ type: "primary", name: "Logg inn og meld skade", onClick: handleClick }}
            media={{ src: grass, alt: "Grass" }}
        >
            <h2>Slik behandler vi saken din</h2>
            <ul className="jkl-p list">
                <li>Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag.</li>
                <li>
                    Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
                </li>
                <li>Hvis vi dekker skaden, reparerer vi telefonen eller nettbrettet.</li>
            </ul>
        </Card>
        <br></br>

        <Card title="Card darkmode" dark>
            <p className="jkl-p">
                Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan
                behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
            </p>
        </Card>
        <br></br>

        <Card
            title="Meld skade av mobil eller nettbrett"
            action={{ type: "secondary", name: "Logg inn og meld skade", onClick: handleClick }}
            dark
            media={{ src: grass, alt: "Grass" }}
        >
            <h2>Slik behandler vi saken din</h2>
            <ul className="jkl-p list">
                <li>Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag.</li>
                <li>
                    Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
                </li>
                <li>Hvis vi dekker skaden, reparerer vi telefonen eller nettbrettet.</li>
            </ul>
        </Card>
    </>
);

ReactDOM.render(<CardDemo />, document.getElementById("app"));
