// noinspection JSUnresolvedVariable

import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import mukData from "../../Assets/Data/Muk.json"
import mukDefaultImg from "../../Utility/Utility";
import styleD from "./Mukdetails.module.css"

function MukDetails () {
    const {number: noteNumber} = useParams();
    const mukId = parseInt(noteNumber);
    const currentMuk = mukData.filter((muk) => muk.numb === mukId)[0];
    const [mukCardInfo, setMukCardInfo]= useState([]);

    useEffect(() => {
        let isMounted = true;
        fetch(`https://api.tcgdex.net/v2/en/cards/${currentMuk.id}`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setMukCardInfo(res);
            })
            .catch((error) => console.log("Error"+error));

        return () => {
            isMounted = false;
        }
    }, [currentMuk.id]);


    return(
    <>
        <Container className="d-flex justify-content-start mt-3 mb-4 mb-md-0">
            <NavLink to={`/Appearances`}>
                <button type="button" className={styleD.bottone}>⮪  Back</button>
            </NavLink>
        </Container>
            <h1 className="text-center my-4">Card details</h1>
        <Container >
            <div className="d-flex justify-content-evenly mb-4">
                {mukId - 1 !== 0 &&
                    <NavLink className={styleD.bottone} to={`/Appearances/${mukId - 1}`}>⮜ Previous</NavLink>
                }
                {mukId + 1 <= Object.keys(mukData).length &&
                    <NavLink className={styleD.bottone} to={`/Appearances/${mukId + 1}`}>Next ⮞</NavLink>
                }
            </div>


        </Container>
        <Container className="mt-4">
            <Row className="py-3">
                <Col xs={12} md={6} >
                    <img className={styleD.imgDetail} src={currentMuk.image} alt={currentMuk.name} loading="lazy"
                         onError={(event) => mukDefaultImg(event)}/>
                </Col>
                <Col>
                    <Row className={styleD.mukInfoFrame}>
                {mukCardInfo.types &&
                    <Col md={6}>
                        <p><strong>Type :</strong> {mukCardInfo.types}</p>
                    </Col>
                }

                {mukCardInfo.weaknesses && mukCardInfo.type?
                    <Col md={6}>
                        {mukCardInfo.weaknesses.map((weaknessesInfo) => {
                                    return <p><strong>Weakness :</strong> {weaknessesInfo.weaknesses.type}</p>
                                }
                            )}
                    </Col>: <Col md={6}>
                      <p><strong>Weakness :</strong> Psychic</p>
                    </Col>
                }
                {mukCardInfo.rarity &&
                    <Col md={6}>
                        <p><strong>Rarity :</strong> {mukCardInfo.rarity}</p>
                    </Col>

                }
                {mukCardInfo.illustrator &&
                    <Col md={6}>
                        <p><strong>Illustrator :</strong> {mukCardInfo.illustrator}</p>
                    </Col>
                        }
                    </Row>
                    <Row>
                        {mukCardInfo.name &&
                            <Col>
                                <Row className={styleD.mukInfoFrame}>
                                    {mukCardInfo.description ? <p> <strong>Description :</strong> {mukCardInfo.description}</p> : <p> <strong>Description :</strong> None</p> }
                                </Row>
                            </Col>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>

    </>
    )
}

export default MukDetails;