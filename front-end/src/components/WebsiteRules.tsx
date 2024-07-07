import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './styles/WebsitePolicy/WebsiteRules.module.scss'



export default function WebsiteRules() {
    const navigate = useNavigate();
    const {t} = useTranslation("global")
    
    return (
        <div className={styles.main}>
            <h1>{t("pages.website_policy_page.header")}</h1>
            <p>
                <br/><strong>1. {t("pages.website_policy_page.text.p1.header")}</strong>
                    <br/>1.1. {t("pages.website_policy_page.text.p1.p1_1")}
                    <br/>1.2. {t("pages.website_policy_page.text.p1.p1_2")}
                    <br/>1.3. {t("pages.website_policy_page.text.p1.p1_3")}
                        {t("pages.website_policy_page.text.p1.p1_3_text.text_1")}
                        {t("pages.website_policy_page.text.p1.p1_3_text.text_2")}
                        {t("pages.website_policy_page.text.p1.p1_3_text.text_3")}
                    <br/>1.4. {t("pages.website_policy_page.text.p1.p1_4")}
                <br/><strong>2. {t("pages.website_policy_page.text.p2.header")}</strong>
                    {t("pages.website_policy_page.text.p2.p2_text.text_1")}
                    {t("pages.website_policy_page.text.p2.p2_text.text_2")}
                    {t("pages.website_policy_page.text.p2.p2_text.text_3")}
                    {t("pages.website_policy_page.text.p2.p2_text.text_4")}
                    {t("pages.website_policy_page.text.p2.p2_text.text_5")}
                <br/><strong>3. {t("pages.website_policy_page.text.p3.header")}</strong>
                    <br/>3.1. {t("pages.website_policy_page.text.p3.p3_1")}
                    <br/>3.2. {t("pages.website_policy_page.text.p3.p3_2")}
                    <br/>3.3. {t("pages.website_policy_page.text.p3.p3_3")}
                    <br/>3.4. {t("pages.website_policy_page.text.p3.p3_4")}
                <br/><strong>4. {t("pages.website_policy_page.text.p4.header")}</strong>
                    <br/>4.1. {t("pages.website_policy_page.text.p4.p4_1")}
                    <br/>4.2. {t("pages.website_policy_page.text.p4.p4_2")}
                    {t("pages.website_policy_page.text.p4.p4_2_text.text_1")}
                    {t("pages.website_policy_page.text.p4.p4_2_text.text_2")}
                    <br/>4.3. {t("pages.website_policy_page.text.p4.p4_3")}
                        <br/>— {t("pages.website_policy_page.text.p4.p4_3_text.text_1")}
                        <br/>— {t("pages.website_policy_page.text.p4.p4_3_text.text_2")}
                        <br/>— {t("pages.website_policy_page.text.p4.p4_3_text.text_3")}
                        <br/>— {t("pages.website_policy_page.text.p4.p4_3_text.text_4")}
                        <br/>— {t("pages.website_policy_page.text.p4.p4_3_text.text_5")}
                        <br/>— {t("pages.website_policy_page.text.p4.p4_3_text.text_6")}
                        <br/>— {t("pages.website_policy_page.text.p4.p4_3_text.text_7")}
                    <br/>4.4. {t("pages.website_policy_page.text.p4.p4_4")}
                    <br/>4.5. {t("pages.website_policy_page.text.p4.p4_5")}
                    <br/>4.6. {t("pages.website_policy_page.text.p4.p4_6")}
                    <br/>4.7. {t("pages.website_policy_page.text.p4.p4_7")}
                <br/><strong>5. {t("pages.website_policy_page.text.p5.header")}</strong>
                    <br/>5.1. {t("pages.website_policy_page.text.p5.p5_1")}
                    <br/>5.2. {t("pages.website_policy_page.text.p5.p5_2")}
                        <br/>— {t("pages.website_policy_page.text.p5.p5_text.text_1")}
                        <br/>— {t("pages.website_policy_page.text.p5.p5_text.text_2")}
                        <br/>— {t("pages.website_policy_page.text.p5.p5_text.text_3")}
                        <br/>— {t("pages.website_policy_page.text.p5.p5_text.text_4")}
                    <br/>5.3. {t("pages.website_policy_page.text.p5.p5_3")}
                    <br/>5.4. {t("pages.website_policy_page.text.p5.p5_4")}
                        <br/>5.4.1. {t("pages.website_policy_page.text.p5.p5_4_1")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_1")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_2")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_3")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_4")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_5")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_6")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_7")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_8")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_9")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_10")}
                            <br/>— {t("pages.website_policy_page.text.p5.p5_4_1_text.text_11")}
                    <br/>5.4.3. {t("pages.website_policy_page.text.p5.p5_4_3")}
                    <br/>5.4.4. {t("pages.website_policy_page.text.p5.p5_4_4")}
                    <br/>5.4.5. {t("pages.website_policy_page.text.p5.p5_4_5")}
                    <br/>5.4.6. {t("pages.website_policy_page.text.p5.p5_4_6")}
                    <br/>5.4.7. {t("pages.website_policy_page.text.p5.p5_4_7")}
                    <br/>5.5. {t("pages.website_policy_page.text.p5.p5_5")}
                    <br/>5.6. {t("pages.website_policy_page.text.p5.p5_6")}
                <br/><strong>6. {t("pages.website_policy_page.text.p6.header")}</strong>
                    <br/>6.1. {t("pages.website_policy_page.text.p6.p6_1")}
                    <br/>6.2. {t("pages.website_policy_page.text.p6.p6_2")}
                    <br/>6.3. {t("pages.website_policy_page.text.p6.p6_3")}
                    <br/>6.4. {t("pages.website_policy_page.text.p6.p6_4")}
                    <br/>6.5. {t("pages.website_policy_page.text.p6.p6_5")}
                    <br/>6.6. {t("pages.website_policy_page.text.p6.p6_6")}
                    <br/>6.7. {t("pages.website_policy_page.text.p6.p6_7")}
                    <br/>6.8. {t("pages.website_policy_page.text.p6.p6_8")}
                    <br/>6.9. {t("pages.website_policy_page.text.p6.p6_9")}
                    <br/>6.10. {t("pages.website_policy_page.text.p6.p6_10")}
                    <br/>6.11. {t("pages.website_policy_page.text.p6.p6_11")}
                <br/><strong>7. {t("pages.website_policy_page.text.p7.header")}</strong>
                    <br/>7.1. {t("pages.website_policy_page.text.p7.p7_1")}
                    <br/>7.2. {t("pages.website_policy_page.text.p7.p7_2")}
                    <br/>7.3. {t("pages.website_policy_page.text.p7.p7_3")}
                    <br/>7.4. {t("pages.website_policy_page.text.p7.p7_4")}
                    <br/>7.5. {t("pages.website_policy_page.text.p7.p7_5")}
                <br/><strong>8. {t("pages.website_policy_page.text.p8.header")}</strong>
                    <br/>8.1. {t("pages.website_policy_page.text.p8.p8_1")}
                    <br/>8.2. {t("pages.website_policy_page.text.p8.p8_2")}
                    <br/>8.3. {t("pages.website_policy_page.text.p8.p8_3")}
                <br/><strong>9. {t("pages.website_policy_page.text.p9.header")}</strong>
                <br/>{t("pages.website_policy_page.text.p9.p9_text.text_1")}
                <br/>{t("pages.website_policy_page.text.p9.p9_text.text_2")}
                <br/>{t("pages.website_policy_page.text.p9.p9_text.text_3")}
            </p>
            <button className={`btn btn-primary btn_inside ${styles.btn_width}`} type="button" onClick={() => navigate(-1)}>
                
                {t("buttons.back")}
            </button>
        </div>
    )
}