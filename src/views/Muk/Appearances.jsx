import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mukData from "../../Assets/Data/Muk.json"
import CardGrid from "../../Components/CardGrid/CardGrid";
import TableApp from "../../Components/TableApp/TableApp";
import styleAp from "./Appearances.module.css"

function Appearances(){
    const [displayGrid, setDisplayGrid] = useState("true")
    const [filteredList, setFilteredList] = useState(mukData);
    const [selectedSeries, setSelectedSeries] = useState("");
    function handleSeriesChange(event) {
        setSelectedSeries(event.target.value);
    }

    function filterBySeries(filteredData) {
        if (!selectedSeries) {
            return filteredData;
        }
        const filteredMukCards = filteredData.filter(
            (mukCard) => mukCard.series === selectedSeries
        );
        return filteredMukCards;
    }

    useEffect(() => {
            let filteredData = filterBySeries(mukData);
            setFilteredList(filteredData);
        },
        [selectedSeries]);

    //


    return(
        <Container>
            <h1 className="text-center">Let's take a look at all of Muk appearances in the TGC throughout the years!</h1>
            <Row>
                <div className="d-flex align-content-center my-3">
                    <button className={clsx("option", { ["active-switch"]: displayGrid } ) } onClick={() => setDisplayGrid(true)}> {/*impostare stile usando clsx(style.option, {style.active}*/}
                    Grid
                </button>
                    <button className={clsx("option", { ["active-switch"]: !displayGrid } ) } onClick={() => setDisplayGrid(false)}>
                    Table
                    </button>
                </div>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Row>
                        <Col md={2}>
                            <div className="d-flex justify-content-between align-items-center mb-5">
                                <select
                                    id="series-input"
                                    className={styleAp.seriesSelect}
                                    value={selectedSeries}
                                    onChange={handleSeriesChange}
                                >
                                    <option value="">All</option>
                                    <option value="Base">Base</option>
                                    <option value="EX">EX</option>
                                    <option value="Diamond & Pearl">Diamond & Pearl</option>
                                    <option value="HeartGold & SoulSilver">HeartGold & SoulSilver</option>
                                    <option value="Platinum">Platinum</option>
                                    <option value="Black & White">Black & White</option>
                                    <option value="Sun & Moon">Sun & Moon</option>
                                    <option value="Sword & Shield">Sword & Shield</option>
                                    <option value="Scarlet & Violet">Scarlet & Violet</option>
                                </select>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <select className={styleAp.seriesSelect}
                                >
                                    <option value="default">Default</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="newest">Newest</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                {displayGrid ? <CardGrid mukData={filteredList} col={{xs:1, sm:2, md:3, lg:3, xl:4}} /> : <TableApp mukData={filteredList}/>}
            </Row>
        </Container>




    )
}

export default Appearances;