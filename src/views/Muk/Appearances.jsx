import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mukData from "../../Assets/Data/Muk.json"
import CardGrid from "../../Components/CardGrid/CardGrid";
import TableApp from "../../Components/TableApp/TableApp";

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

    return(
        <Container>
            <h1>Take a look at all of Muk appearances in the TGC throughout the years!</h1>
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
            <Row>
                <Col>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <select
                            id="series-input"
                            className="form-select"
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
            </Row>
            <Row>
                {displayGrid ? <CardGrid mukData={mukData} col={{xs:1, sm:2, md:3, lg:3, xl:4}} seriesList={filteredList}/> : <TableApp mukData={mukData} seriesList={filteredList}/>}
            </Row>
        </Container>




    )
}

export default Appearances;