import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import AccountControlModal from "./components/account-control-modal";
import AccountControlModalButton from "./components/account-control-modal-button";

export default function Landing() {
    const [ showLoginModal, setShowLoginModal ] = useState(false);

    const loginModal = showLoginModal 
        ? <AccountControlModal toggleModalVisibility={setShowLoginModal} />
        : <AccountControlModalButton toggleModalVisibility={setShowLoginModal} />;

    return (
        <div>
            <Header element={loginModal} />
            LANDING PAGE <br /><br />
            <Footer />
        </div>
    )
}