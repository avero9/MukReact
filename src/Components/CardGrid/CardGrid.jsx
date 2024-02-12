import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardApp from "../CardApp/CardApp";
function CardGrid(props){
    const {mukData, col}=props;
    const mukGrid = mukData.map((muk) => {
        return(
            <div key={muk.id} className="col">
                <CardApp
                    id={muk.id}
                    name={muk.name}
                    image={muk.image}
                    numb={muk.numb}
                    set={muk.set}
                    series={muk.series}
                    date={muk.releaseDate}
                    logo={muk.logo}/>
            </div>
        );
    });

    return(
        <div className={`row 
                        row-cols-${col.xs} 
                        row-cols-sm-${col.sm}
                        row-cols-md-${col.md}
                        row-cols-lg-${col.lg} 
                        row-cols-xl-${col.xl}`
        }>
            {mukGrid}
        </div>
    );
}

export default CardGrid