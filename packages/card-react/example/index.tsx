import React from "react";
import ReactDOM from "react-dom";
import { Card } from "../src";
import { BulletList, BulletListItem } from "@fremtind/jkl-bullet-list-react";

function handleClick() {
    console.log("This is working");
}

const CardDemo = () => (
    <>
        <a href="https://fremtind.github.io/jokul/" className="clickable">
            <Card title="Basic Card">
                <h2>Clickable</h2>
                <p>
                    Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan
                    behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.
                </p>
            </Card>
        </a>
        <br></br>

        <Card
            title="Kjøp bilforsikring"
            media={{
                src:
                    "https://images.unsplash.com/photo-1527867285503-73b0f9cc791f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
                label: "Driving",
            }}
        ></Card>
        <br></br>

        <Card
            title="Meld skade av mobil eller nettbrett"
            action={{ type: "primary", name: "Logg inn og meld skade", onClick: handleClick }}
        >
            <img
                className="jkl-card__media"
                src="https://fremtind.papirfly.no/readimage.aspx?pubid=86367a62-805c-495c-a2b1-791436c56489&quality=6"
                alt="Grass"
            ></img>
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
            <img
                className="jkl-card__media"
                src="https://fremtind.papirfly.no/readimage.aspx?pubid=86367a62-805c-495c-a2b1-791436c56489&quality=6"
                alt="Grass"
            ></img>
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
