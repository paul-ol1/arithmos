import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export function Title(){
    const location = useLocation();

    // Extract the pathname from the location object
    const pathname = location.pathname;

    // Split the pathname into segments based on '/'
    const pathSegments = pathname.split("/").filter((segment) => segment !== "");
    const [title, setTitle] = useState();
    pathSegments.length === 0 ? setTitle("Inventory") : setTitle(pathSegments[0]);
    return [title, setTitle];

}