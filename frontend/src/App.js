import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
    return (
        <>
            <Header />
            <main>
                <Container className="py-3">
                    <h1>Welcome to ProShop</h1>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;