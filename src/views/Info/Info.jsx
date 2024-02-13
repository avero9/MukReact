// noinspection JSUnresolvedVariable

import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Muk from "../../Assets/Images/Muk.jpg";
import alolanMuk from "../../Assets/Images/Alolan-Muk.webp";
import { removeDashesAndUnderscores} from "../../Utility/Utility";
import {NavLink} from "react-router-dom";
import stylei from "./Info.module.css"

function Info(){
    const [mukInfo, setMukInfo]= useState([]);
    const [aMukInfo, setAMukInfo]= useState([]);
    const [mukVersion, setMukVersion] = useState(false);

    useEffect(() => {
        let isMounted = true;
        fetch(`https://pokeapi.co/api/v2/pokemon/muk`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setMukInfo(res);
            })
            .catch((error) => console.log("Error"+error));

        return () => {
            isMounted = false;
        }
    }, []);

    useEffect(() => {
        let isMounted = true;
        fetch(`https://pokeapi.co/api/v2/pokemon/muk-alola`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setAMukInfo(res);
            })
            .catch((error) => console.log("Error"+error));

        return () => {
            isMounted = false;
        }
    }, []);
    {/*mettere shiny, trasformarli in componenti*/}
const Kanto = (
    <Row>
        <Col md={6}>
            <img  className={stylei.img1} src={Muk} alt="Muk"/>
                <button
                    type="button"
                    className={stylei.bottone}
                    onClick={() => setMukVersion(false)}>
                    Switch to Alolan version
                </button>
        </Col>
        <Col md={6}>
            <Row className={stylei.mukInfoFrame}>
                {mukInfo.height &&
                    <Col >
                        <p>Height: {mukInfo.height} m</p> {/*rendering condizionale alolan}*/}
                    </Col>
                }
                {mukInfo.weight &&
                    <Col>
                        <p>Weight: {mukInfo.weight} kg</p>
                    </Col>
                }
            </Row>
            <Row className={stylei.mukInfoFrame}>
                {mukInfo.abilities &&
                    <Col >
                        <p className="text-center">Abilities</p>
                        <ul>
                            {mukInfo.abilities.map((abilityInfo) => {
                                    return <li key={abilityInfo.ability.name}>{removeDashesAndUnderscores(abilityInfo.ability.name)}</li>
                                }
                            )}
                        </ul>
                    </Col>
                }
                {mukInfo.stats &&
                    <Col >
                        <p className="text-center">Stats</p>
                        <ul>
                            {mukInfo.stats.map((statsInfo) => {
                                    return <li key={statsInfo.stat.name}>{removeDashesAndUnderscores(statsInfo.stat.name)}: {statsInfo.base_stat}</li>
                                }
                            )}
                        </ul>
                    </Col>
                }
            </Row>
        </Col>
    </Row>
);

    const Alola = (
        <Row>
            <Col className="col-6">
                <img  className={stylei.img1} src={alolanMuk} alt="Alolan-Muk"/>
                    <button
                        type="button"
                        className={stylei.bottone}
                        onClick={() => setMukVersion(true)}>
                        Switch to Kantonian version
                    </button>
            </Col>
            <Col md={6} >
                <Row className={stylei.mukInfoFrame}>
                    {aMukInfo.height &&
                        <Col>{/* fare row col */}
                            <p>Height: {aMukInfo.height} m</p>
                        </Col>
                    }
                    {aMukInfo.weight &&
                        <Col >
                            <p>Weight: {aMukInfo.weight} kg</p>
                        </Col>
                    }
                </Row>
                <Row className={stylei.mukInfoFrame}>
                    {aMukInfo.abilities &&
                        <Col>
                            <p className="text-center">Abilities</p>
                            <ul>
                                {aMukInfo.abilities.map((abilityInfo) => {
                                        return <li key={abilityInfo.ability.name}>{removeDashesAndUnderscores(abilityInfo.ability.name)}</li>
                                    }
                                )}
                            </ul>
                        </Col>
                    }
                    {mukInfo.stats &&
                        <Col >
                            <p className="text-center">Stats</p>
                            <ul>
                                {aMukInfo.stats.map((statsInfo) => {
                                        return <li key={statsInfo.stat.name}>{removeDashesAndUnderscores(statsInfo.stat.name)}: {statsInfo.base_stat}</li>
                                    }
                                )}
                            </ul>
                        </Col>
                    }
                </Row>
            </Col>
        </Row>
    );

    return(
        <>
            <Container>
                {mukVersion ? Kanto : Alola}
                <Row className="mt-4">
                    <h2>So who is Muk?</h2>
                    <p>Muk (Japanese: ベトベトン Betobeton) is a Poison-type Pokémon introduced in Generation I.

                        It evolves from Grimer starting at level 38.

                        In Alola, Muk has a dual-type Poison/Dark regional form.</p>
                    <h3>Biology</h3>
                    <p>Muk is a large, sticky, amorphous Pokémon made of living purple sludge. It has two small eyes with beady black pupils. It also has an enormous mouth with a gray tongue and strands of ooze connecting its top and bottom jaws. While it has no visible legs, it does have two arms with three fingers on each hand. However, it typically keeps one hand tucked in while it extends the other hand.

                        Muk is a living biohazard, leaking toxins that instantly kill all plant life it touches. Even it being in close proximity to plants will cause them to wilt and die. Extreme caution is advised in avoiding any contact with this Pokémon, as an accidental brush-up can lead to severe sickness. The effects of this Pokémon can leave the landscape barren for three years. It will readily consume nearly any waste or refuse generated by people and Pokémon alike. Muk's body produces a powerful odor that can cause fainting. However, despite the risk Muk's stench contains, some fans of Muk believe its stench is a good thing.

                        Muk can be found in heavily polluted bodies of water, factories and cities, where groups can gather to consume trash that people throw away into the streets. However, Muk's population has declined due to recent environmental improvements and extermination efforts. This has led some to believe that it will go extinct at some point; sludge ponds are being built to prevent its extinction.</p>
                    <h3>Forms</h3>
                    <p>Muk has a regional form: Alolan Muk.

                        Alolan Muk has a more vibrant coloration, consisting of green, pink, and yellow stripes with thin blue bands in between. The green, yellow, and pink stripes are capable of shifting downwards while the blue stays in place. It has various white, crystallized poison shards protruding from parts of its body, especially from its mouth and fingers, giving the impression of claws and fangs. It has blue eyes with a black space behind them and a bright blue tongue. Its vivid coloration is a result of the garbage it eats, which causes chemical changes in its body. Its body contains over a hundred different kinds of poisons. Chemical reactions of different poisons occurring within its body is the source of Alolan Muk's vitality.

                        Alolan Muk is unexpectedly quiet and friendly. However, if it is not fed trash for a while, its hunger will compel it to destroy its Trainer's furnishings for food. It is thought that it cannot maintain its energy without a constant source of toxins, which causes its voracious appetite. The crystals covering its body have a tendency to break off, which makes it extremely difficult to deal with due to the concentrated toxins contained within them. Unlike Kantonian Muk, Alolan Muk does not produce a foul stench due to its toxins being contained within its body.</p>
                </Row>
            </Container>
        </>
    )
}

export default Info;