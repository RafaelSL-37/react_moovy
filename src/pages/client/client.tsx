import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Body from "./components/body";
import { LogoutButton } from "./components/logout-button";

export default function Client() {
    return (
        <div>
            <Header element={<LogoutButton />} />
            <Body />
            <Footer />
        </div>
    )
}