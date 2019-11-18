import React from "react";
import ReactDOM from "react-dom";
import { Card } from "../src";
import { BulletList, BulletListItem } from "@fremtind/jkl-bullet-list-react";
import car from "./img/car.jpg";
import grass from "./img/grass.jpg";

function handleClick() {
    console.log("This is working");
}

const CardDemo = () => (
    <>
        <a href="https://fremtind.github.io/jokul/" className="clickable">
            <Card title="Basic Card" className="test-class">
                <h2 className="jkl-h4">Clickable</h2>
                <p className="jkl-p">
                    Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan
                    behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
                </p>
            </Card>
        </a>
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
        >
            <img className="jkl-card__media" src={grass} alt="Grass"></img>
            <h2>Slik behandler vi saken din</h2>
            <BulletList>
                <BulletListItem>
                    Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag.
                </BulletListItem>
                <BulletListItem>
                    Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
                </BulletListItem>
                <BulletListItem>Hvis vi dekker skaden, reparerer vi telefonen eller nettbrettet.</BulletListItem>
            </BulletList>
        </Card>
        <br></br>

        <Card title="Card darkmode" dark>
            <p>
                Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan
                behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
            </p>
        </Card>
        <br></br>

        <Card
            title="Meld skade av mobil eller nettbrett"
            action={{ type: "secondary", name: "Logg inn og meld skade", onClick: handleClick }}
            dark
        >
            <img className="jkl-card__media" src={grass} alt="Grass"></img>
            <h2>Slik behandler vi saken din</h2>
            <BulletList>
                <BulletListItem>
                    Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag.
                </BulletListItem>
                <BulletListItem>
                    Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
                </BulletListItem>
                <BulletListItem>Hvis vi dekker skaden, reparerer vi telefonen eller nettbrettet.</BulletListItem>
            </BulletList>
        </Card>
    </>
);

ReactDOM.render(<CardDemo />, document.getElementById("app"));
