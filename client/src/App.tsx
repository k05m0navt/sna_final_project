import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
            <Header text="Find what to do" />
            <Body />
            <Footer text="Designed by Daniil Gubaidullin" />
        </div>
    );
};

export default App;
