import Logo from "../logo.svg"
import './styles/footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
                <img src={Logo} height={80} width={80} />
                <p>Copyright &copy; 2022</p>
            </div>
            <div className="footer-menu"></div>
            <div className="footer-menu"></div>
            <div className="footer-menu"></div>
        </div>
    );
}
export default Footer