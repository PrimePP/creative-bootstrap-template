
import fullOne from "./images/fullOne.jpg";
import portOne from "./images/portOne.jpg";
import fullTwo from './images/fullTwo.jpg';
import fullThre from './images/fullThre.jpg';
import fullFour from './images/fullFour.jpg';
import fullFive from './images/fullFive.jpg';
import fullSix from './images/fullSix.jpg';
import portTwo from "./images/portTwo.jpg";
import portThree from "./images/portThree.jpg";
import portFour from "./images/portFour.jpg";
import portFive from "./images/portFive.jpg";
import portSix from "./images/portSix.jpg";




const Gall = ({title="My Project"}) => {
    return (
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullOne} title="{title}">
                            <img className="img-fluid" src={portOne} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">{title}</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullTwo} title="{title}">
                            <img className="img-fluid" src={portTwo} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">{title}</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullThre} title="{title}">
                            <img className="img-fluid" src={portThree} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">{title}</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullFour} title="{title}">
                            <img className="img-fluid" src={portFour} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">{title}</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullFive} title="{title}">
                            <img className="img-fluid" src={portFive} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">{title}</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullSix} title="{title}">
                            <img className="img-fluid" src={portSix} alt="..." />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">{title}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gall;