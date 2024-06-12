import React from "react";
import { PrimeReactProvider } from "primereact/api";

import { Table } from "../../componenets/Table";

const Home = () => {
    return (
        <>
            <PrimeReactProvider>
                <Table />
            </PrimeReactProvider>
        </>
    );
};

export default Home;
