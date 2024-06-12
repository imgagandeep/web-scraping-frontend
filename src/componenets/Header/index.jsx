import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";

import { useCreateScrapedDataMutation } from "../../store/apiSlice/homeApiSlice";

const Header = () => {
    const [value, setValue] = useState("");
    const toast = useRef(null);

    const [createScrapedData, { isLoading }] = useCreateScrapedDataMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createScrapedData({ url: value }).unwrap();
        toast.current.show({
            severity: "info",
            summary: "Info",
            detail: "Website scrape successfully!",
        });
        setValue("");
    };

    return (
        <>
            <Toast ref={toast} />
            <form className="form" onSubmit={handleSubmit}>
                <div className="card flex flex-column md:flex-row gap-3 w-full">
                    <div className="flex flex-column md:flex-row gap-3 md:max-w-30rem w-full">
                        <div className="p-inputgroup flex-1">
                            <InputText
                                placeholder="Enter domain name"
                                value={value}
                                onChange={(event) =>
                                    setValue(event.target.value)
                                }
                            />
                        </div>
                        {isLoading ? (
                            <ProgressSpinner
                                className="h-full"
                                style={{ width: "30px" }}
                            />
                        ) : (
                            <Button
                                type="submit"
                                disabled={!value}
                                label="Fetch & Save Detail"
                                className="w-full md:w-auto"
                            />
                        )}
                    </div>
                </div>
            </form>
        </>
    );
};

export { Header };
