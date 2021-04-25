import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="
                flex flex-col 
                flex-grow container mx-auto px-2 
            ">
                {children}
            </main>
            <Footer />
        </div>
    );
}
