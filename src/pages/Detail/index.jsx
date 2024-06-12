import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "primeicons/primeicons.css";
import { baseAPIURL } from "../../constant";
import { useGetScrapedDataQuery } from "../../store/apiSlice/homeApiSlice";

const Detail = () => {
    let { id } = useParams();
    const { data } = useSelector((state) => state.home);

    useGetScrapedDataQuery(id, { refetchOnMountOrArgChange: true });

    return (
        <>
            <div>
                <div className="card">
                    <div className="flex flex-column md:flex-row gap-3 w-full">
                        <div className="flex">
                            <img
                                className="w-10rem h-10rem"
                                alt="website-img"
                                src={`${data?.companyLogo}`}
                            />
                        </div>

                        <div className="flex flex-column gap-3 w-full">
                            <div className="flex w-auto">
                                <h2 className="m-0 capitalize">{data?.name}</h2>
                            </div>
                            <div className="flex flex-column md:flex-row gap-5">
                                <div className="flex flex-column gap-2">
                                    <span className="flex gap-2 text-400">
                                        <i className="pi pi-info-circle" />
                                        Description
                                    </span>
                                    <span
                                        className="white-space-normal w-20rem"
                                        style={{ wordWrap: "anywhere" }}
                                    >
                                        {data?.description || <NotAvailable />}
                                    </span>
                                </div>
                                <div className="flex flex-column gap-3">
                                    <div className="flex flex-column">
                                        <span className="flex gap-2 text-400 align-items-center">
                                            <i className="pi pi-phone" />
                                            Phone
                                        </span>
                                        <span>
                                            {data?.phone ? (
                                                <a
                                                    href={`tel:${data?.phone}`}
                                                    className="no-underline"
                                                >
                                                    {data?.phone}
                                                </a>
                                            ) : (
                                                <NotAvailable />
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex flex-column">
                                        <span className="flex gap-2 text-400 align-items-center">
                                            <i className="pi pi-envelope" />
                                            Email
                                        </span>
                                        <span>
                                            {data?.email ? (
                                                <a
                                                    href={`mailto:${data?.email}`}
                                                    className="no-underline"
                                                >
                                                    {data?.email}
                                                </a>
                                            ) : (
                                                <NotAvailable />
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-column md:flex-row gap-3">
                    <div className="card w-full md:w-3 h-full">
                        <div className="flex flex-column gap-4">
                            <h4 className="m-0">Company Details</h4>
                            <div className="flex flex-column">
                                <span className="flex gap-2 text-400 align-items-center">
                                    <i className="pi pi-globe" />
                                    Website
                                </span>
                                <span>
                                    {data?.website ? (
                                        <a
                                            href={data?.website}
                                            className="no-underline"
                                        >
                                            {data?.website}
                                        </a>
                                    ) : (
                                        <NotAvailable />
                                    )}
                                </span>
                            </div>
                            <div className="flex flex-column">
                                <span className="flex gap-2 text-400 align-items-center">
                                    <i className="pi pi-info-circle" />
                                    Description
                                </span>
                                <span
                                    className="white-space-normal w-auto"
                                    style={{ wordWrap: "anywhere" }}
                                >
                                    {data?.description || <NotAvailable />}
                                </span>
                            </div>
                            <div className="flex flex-column">
                                <span className="flex gap-2 text-400 align-items-center">
                                    <i className="pi pi-envelope" />
                                    Email
                                </span>
                                <span>
                                    {data?.email ? (
                                        <a
                                            href={`mailto:${data?.email}`}
                                            className="no-underline"
                                        >
                                            {data?.email}
                                        </a>
                                    ) : (
                                        <NotAvailable />
                                    )}
                                </span>
                            </div>
                            <div className="flex flex-column">
                                <span className="flex gap-2 text-400 align-items-center">
                                    <i className="pi pi-facebook" />
                                    Facebook
                                </span>
                                <span>
                                    {data?.socialMedia?.facebook ? (
                                        <a
                                            href={data?.socialMedia?.facebook}
                                            className="no-underline"
                                        >
                                            {data?.socialMedia?.facebook}
                                        </a>
                                    ) : (
                                        <NotAvailable />
                                    )}
                                </span>
                            </div>
                            <div className="flex flex-column">
                                <span className="flex gap-2 text-400 align-items-center">
                                    <i className="pi pi-instagram" />
                                    Instagram
                                </span>
                                <span>
                                    {data?.socialMedia?.instagram ? (
                                        <a
                                            href={data?.socialMedia?.instagram}
                                            className="no-underline"
                                        >
                                            {data?.socialMedia?.instagram}
                                        </a>
                                    ) : (
                                        <NotAvailable />
                                    )}
                                </span>
                            </div>
                            <div className="flex flex-column">
                                <span className="flex gap-2 text-400 align-items-center">
                                    <i className="pi pi-twitter" />
                                    Twitter
                                </span>
                                <span>
                                    {data?.socialMedia?.twitter ? (
                                        <a
                                            href={data?.socialMedia?.twitter}
                                            className="no-underline"
                                        >
                                            {data?.socialMedia?.twitter}
                                        </a>
                                    ) : (
                                        <NotAvailable />
                                    )}
                                </span>
                            </div>
                            <div className="flex flex-column">
                                <span className="flex gap-2 text-400 align-items-center">
                                    <i className="pi pi-linkedin" />
                                    Linkedin
                                </span>
                                <span>
                                    {data?.socialMedia?.linkedin ? (
                                        <a
                                            href={data?.socialMedia?.linkedin}
                                            className="no-underline"
                                        >
                                            {data?.socialMedia?.linkedin}
                                        </a>
                                    ) : (
                                        <NotAvailable />
                                    )}
                                </span>
                            </div>
                            <div className="flex flex-column">
                                <span className="flex gap-2 text-400 align-items-center">
                                    <i className="pi pi-map-marker" />
                                    Address
                                </span>
                                <span>{data?.address || <NotAvailable />}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full md:w-9">
                        <div className="flex flex-column gap-3">
                            <h4 className="m-0 flex gap-2 align-items-center">
                                <i className="pi pi-camera" /> Screenshot of
                                Webpage
                            </h4>
                            <div className="flex">
                                <img
                                    className="w-full h-full"
                                    alt="website-img"
                                    src={`${baseAPIURL}/${data?.screenshot}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const NotAvailable = () => {
    return (
        <>
            <span className="text-secondary font-medium text-500">
                Not Available
            </span>
        </>
    );
};

export default Detail;
