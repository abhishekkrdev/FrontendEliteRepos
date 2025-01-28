import SlowComponent from "./SlowComponent";
import ButtonWithModal from "./ButtonWithModal";
import RefactorComponent from "./RefactorComponent";

function App() {
    return (
        <RefactorComponent>
            <div>Something done here</div>
            <ButtonWithModal />
            <div>Something done here</div>
            <SlowComponent />
        </RefactorComponent>
    );
    // return (
    //     <>
    //         <div>Something done here</div>
    //         <ButtonWithModal />
    //         <div>Something done here</div>
    //         <SlowComponent />
    //     </>
    // );
}

export default App;
