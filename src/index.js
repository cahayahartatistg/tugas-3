import ReactDOM from "react-dom/client";

function Welcome(props){
    return <h1>Selamat Datang {props.nama}</h1>

}

let pengguna = "Cahaya Hartati Sitanggang";

function App(){
    if(pengguna){
        return <Welcome nama = {pengguna} />;
        
    }else{
        return <button>Login</button>;
    }
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)