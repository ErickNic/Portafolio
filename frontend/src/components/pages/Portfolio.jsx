import { Helmet } from "react-helmet";
import styles from './portfolio.module.css'

const Portfolio = () =>{
    return(
        <div className={styles.main_container}>
            <Helmet>
                <title>Portafolio | ErickMMA</title>
            </Helmet>
            <p>Porfolio Main section</p>
        </div>
    );
};

export default Portfolio;