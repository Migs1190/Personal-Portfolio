import { Navbar, Nav, Tooltip, OverlayTrigger } from "react-bootstrap";
import "../styles/appNav.min.css";

const checkPoints = [
    {
        id: 1,
        region: "#home",
        icon: "fa-house-chimney",
        tooltip: "Home",
    },
    {
        id: 2,
        region: "#projects",
        icon: "fa-code-commit",
        tooltip: "Projects",
    },
    {
        id: 3,
        region: "#skills",
        icon: "fa-screwdriver-wrench",
        tooltip: "Skills & Tools",
    },
    {
        id: 4,
        region: "#contact",
        icon: "fa-address-book",
        tooltip: "Contact Info",
    },
];

export default function AppNav() {
    const mode = localStorage.getItem("preferredMode") ?
        localStorage.getItem("preferredMode") : "light";
    document.body.id = mode;
    return (
        <>
            <nav>
                <Navbar
                    id="navbar"
                    className="
                    flex-column
                    justify-content-between
                    text-center position-fixed 
                    translate-middle 
                    top-50 
                    rounded-pill 
                    d-md-flex 
                    d-none"
                ><Nav id="nav-nav" className="">
                        <Nav.Item id="nav-item">
                            <Nav.Link
                                className="rounded-circle opacity-100 "
                                onClick={() => {
                                    document.body.id == "light"
                                        ? (document.body.id = "dark")
                                        : (document.body.id = "light");
                                    localStorage.setItem("preferredMode", document.body.id);
                                }}
                            >
                                <div className="nav-link-modes">
                                    <i className="fa-solid fa-moon"></i>
                                    <i className="fa-solid fa-sun"></i>
                                </div>
                            </Nav.Link>

                            {checkPoints.map((checkPoint) => (
                                <div key={checkPoint.id}>
                                    <i className="nav-link-dot fa-solid fa-circle fa-xs"></i>

                                    <OverlayTrigger
                                        placement="right"
                                        overlay={
                                            <Tooltip className="position-fixed">
                                                {checkPoint.tooltip}
                                            </Tooltip>
                                        }
                                    >
                                        <Nav.Link
                                            className="nav-link rounded-circle"
                                            href={checkPoint.region}
                                        >
                                            <i className={"fa-solid " + checkPoint.icon}></i>
                                        </Nav.Link>
                                    </OverlayTrigger>
                                </div>
                            ))}
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </nav>
        </>
    );
}
