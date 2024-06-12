import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";

import {
    useGetScrapedDataQuery,
    useDeleteScrapedDataMutation,
} from "../../store/apiSlice/homeApiSlice";

const Table = () => {
    const [values, setValues] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const { data } = useSelector((state) => state.home);
    const dt = useRef(null);
    const toast = useRef(null);

    useGetScrapedDataQuery("", { refetchOnMountOrArgChange: true });
    const [deleteScrapedData, { isLoading }] = useDeleteScrapedDataMutation();

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const handleDeleteSelectedRecord = async () => {
        try {
            await deleteScrapedData(selectedData);
            setSelectedData([]);
            toast.current.show({
                severity: "error",
                summary: "Delete",
                detail: "Records has been deleted successfully!",
            });
        } catch (error) {}
    };

    const header = (
        <div className="flex align-items-center justify-content-start gap-2">
            <Button
                type="button"
                label="Delete records"
                severity="danger"
                disabled={!selectedData.length}
                onClick={() => handleDeleteSelectedRecord()}
            />
            <Button
                type="button"
                label="Export CSV"
                onClick={() => exportCSV(false)}
                data-pr-tooltip="CSV"
            />
            {isLoading && (
                <ProgressSpinner className="h-full" style={{ width: "30px" }} />
            )}
        </div>
    );

    useEffect(() => {
        setValues(data.map((item) => ({ ...item, id: item._id })));
    }, [data]);

    return (
        <>
            <Toast ref={toast} />
            <div className="card">
                <DataTable
                    ref={dt}
                    header={header}
                    value={values}
                    stripedRows
                    selectionMode="checkbox"
                    selection={selectedData}
                    onSelectionChange={(e) => setSelectedData(e.value)}
                    dataKey="id"
                    tableStyle={{ minWidth: "50rem" }}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                >
                    <Column
                        selectionMode="multiple"
                        headerStyle={{ width: "3rem" }}
                    ></Column>
                    <Column
                        field="name"
                        header="Name"
                        body={nameBodyTemplate}
                    ></Column>
                    <Column
                        field="social"
                        header="Social Profiles"
                        body={socialBodyTemplate}
                        style={{ minWidth: "10rem" }}
                    ></Column>
                    <Column field="description" header="Description"></Column>
                    <Column field="address" header="Address"></Column>
                    <Column
                        field="phone"
                        header="Phone No"
                        body={phoneBodyTemplate}
                        style={{ minWidth: "10rem", textWrap: "nowrap" }}
                    ></Column>
                    <Column
                        field="email"
                        header="Email"
                        body={emailBodyTemplate}
                        style={{ minWidth: "10rem", textWrap: "nowrap" }}
                    ></Column>
                </DataTable>
            </div>
        </>
    );
};

const nameBodyTemplate = (rowData) => {
    return (
        <div className="flex align-items-center gap-2">
            {rowData.companyLogo && (
                <img
                    alt=" "
                    src={rowData.companyLogo}
                    style={{ width: "24px" }}
                />
            )}
            <a href={`/detail/${rowData._id}`} className="no-underline">
                <span className="capitalize">{rowData.name}</span>
            </a>
        </div>
    );
};

const socialBodyTemplate = (rowData) => {
    return (
        <div className="flex align-items-center gap-2">
            <>
                <a
                    href={rowData?.socialMedia?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="pi pi-facebook" />
                </a>
                <a
                    href={rowData?.socialMedia?.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="pi pi-instagram" />
                </a>
                <a
                    href={rowData?.socialMedia?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="pi pi-linkedin" />
                </a>
            </>
        </div>
    );
};

const phoneBodyTemplate = (rowData) => {
    return (
        <div className="flex align-items-center gap-2">
            <>
                <a href={`tel:${rowData?.phone}`} className="no-underline">
                    {rowData?.phone}
                </a>
            </>
        </div>
    );
};

const emailBodyTemplate = (rowData) => {
    return (
        <div className="flex align-items-center gap-2">
            <>
                <a href={`mailto:${rowData?.email}`} className="no-underline">
                    {rowData?.email}
                </a>
            </>
        </div>
    );
};

export { Table };
