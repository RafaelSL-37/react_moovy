import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Body from "./components/body";
import { LogoutButton } from "./components/logout-button";

export default function Client() {
    //TODO: CHANGE THIS TO VIEW AND CONTAINER MODE
    //VIEW CONTAINS THE APP CONSTRUCTION
    //CONTAINER CONTAINS THE LOGIC AND API CALLS
    return (
        <div>
            <Header element={<LogoutButton />} />
            <Body />
            <Footer />
        </div>
    )
}