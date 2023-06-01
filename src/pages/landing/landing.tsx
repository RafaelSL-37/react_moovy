import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Login from "./components/login";

export default function Landing() {
    const [ showLoginModal, setShowLoginModal ] = useState(false);

    const loginModal = showLoginModal 
        ? <button onClick={() => setShowLoginModal(true)}>Login v</button> 
        : <Login toggleFunction={setShowLoginModal} />

    return (
        <div>
            <Header />
            {loginModal}
            {/* TODO: PUT BUTTON INSIDE HEADER */}
            LANDING PAGE <br /><br />
            <Footer />
        </div>
    )
}