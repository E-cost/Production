import { useTranslation } from 'react-i18next';

import { Reveal } from './shared/Reveal';

import image from '../images/background/home.jpg';
import caviar from '../images/caviar/photo.png';
import caviar_1 from '../images/caviar/photo_1.png';
import caviar_2 from '../images/caviar/photo_2.png';
import styles from './styles/Home/Home.module.scss';



function HomePage() {
  const [t] = useTranslation("global");

  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  
  return (
    <section className={styles.home_page}>
      <div className={styles.content}>
        <img src={image} className={styles.bg_image} alt='.' />
        <Reveal>
          <div className={styles.text_container}>
            <h1>{t("pages.home_page.company")}</h1>
            <h2>{t("pages.home_page.message")}</h2>
          </div>
        </Reveal>
      </div>
      <div className={styles.images_container}>
        <div className={`${styles.image_block} ${styles.first_image_block}`}>
          <img src={caviar} alt='caviar' className={styles.image} />
          <h4>{t("pages.home_page.caviar.caviar_1.name")}</h4>
          <p className={styles.image_text}>
            {t("pages.home_page.caviar.caviar_1.description")}
          </p>
          <button className={`btn btn-primary btn_inside ${styles.btn_width}`} type="button" onClick={() => handleButtonClick("/products/seafood/a62d7559-bddd-4a6f-8f38-5b0746cb1f6b")}>
              {t("buttons.detailed")}
          </button>
        </div>
        <div className={styles.image_block}>
          <img src={caviar_1} alt='caviar' className={styles.image} />
          <h4>{t("pages.home_page.caviar.caviar_2.name")}</h4>
          <p className={styles.image_text}>
            {t("pages.home_page.caviar.caviar_2.description")}
          </p>
          <button className={`btn btn-primary btn_inside ${styles.btn_width}`} type="button" onClick={() => handleButtonClick("/products/seafood/afa3894c-3b40-4d76-9118-813575478f57")}>
              {t("buttons.detailed")}
          </button>
        </div>
        <div className={styles.image_block}>
          <img src={caviar_2} alt='caviar' className={styles.image} />
          <h4>{t("pages.home_page.caviar.caviar_3.name")}</h4>
          <p className={styles.image_text}>
            {t("pages.home_page.caviar.caviar_3.description")}
          </p>
          <button className={`btn btn-primary btn_inside ${styles.btn_width}`} type="button" onClick={() => handleButtonClick("/products/seafood/ac99bc38-32b2-4d4e-9442-07a4a4917129")}>
              {t("buttons.detailed")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
