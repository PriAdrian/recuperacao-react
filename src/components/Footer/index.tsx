import "./style.css";

//rotas
import { Link } from "react-router-dom";

//imagens
import ImgWatssap from "../../assets/img/wats 1.png"
import logo from "../../assets/img/logo 1.png"
function Footer() {
    return (<footer>
        <div className ="container footer_container">
            <p>Todos os direitos reservados ®</p>
            <div>
                <a href="#"><img src="../img/whats 1.png" alt=""></a>
                <a href="#"><img src="../img/face 1.png" alt=""></a>
                <a href="#"><img src="../img/instag 1.png" alt=""></a>
            </div>
        </div>
    </footer>
     
    );
};

export default Footer;