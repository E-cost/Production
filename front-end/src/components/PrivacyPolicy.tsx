import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles/Bootstrap/button.scss"
import styles from "./styles/Privacy/PrivacyPolicy.module.scss"



export default function PrivacyPolicy() {
    const navigate = useNavigate();
    const {t} = useTranslation("global")

    return (
        <div className={styles.main}>
            <h1>{t("pages.policy_privacy_page.header")}</h1>
            <p>
                <br/>1. {t("pages.policy_privacy_page.text.p1.p1_header")}
                <br/> {t("pages.policy_privacy_page.text.p1.p1_text")}
                <br/>1.1. {t("pages.policy_privacy_page.text.p1.p1_1")}
                <br/>1.2. {t("pages.policy_privacy_page.text.p1.p1_2")}
                <br/>2. {t("pages.policy_privacy_page.text.p2.p2_header")}
                <br/>2.1. {t("pages.policy_privacy_page.text.p2.p2_1")}
                <br/>2.2. {t("pages.policy_privacy_page.text.p2.p2_2")}
                <br/>2.3. {t("pages.policy_privacy_page.text.p2.p2_3")}
                <br/>2.4. {t("pages.policy_privacy_page.text.p2.p2_4")}
                <br/>2.5. {t("pages.policy_privacy_page.text.p2.p2_5")}
                <br/>2.6. {t("pages.policy_privacy_page.text.p2.p2_6")}
                <br/>2.7. {t("pages.policy_privacy_page.text.p2.p2_7")}
                <br/>2.8. {t("pages.policy_privacy_page.text.p2.p2_8")}
                <br/>2.9. {t("pages.policy_privacy_page.text.p2.p2_9")}
                <br/>2.10. {t("pages.policy_privacy_page.text.p2.p2_10")}
                <br/>2.11. {t("pages.policy_privacy_page.text.p2.p2_11")}
                <br/>2.12. {t("pages.policy_privacy_page.text.p2.p2_12")}
                <br/>2.13. {t("pages.policy_privacy_page.text.p2.p2_13")}
                <br/>2.14. {t("pages.policy_privacy_page.text.p2.p2_14")}
                <br/>3. {t("pages.policy_privacy_page.text.p3.p3_header")}
                <br/>3.1. {t("pages.policy_privacy_page.text.p3.p3_1.p3_1_header")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_1.t_1")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_1.t_2")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_1.t_3")}
                <br/>3.2. {t("pages.policy_privacy_page.text.p3.p3_2.p3_2_header")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_2.t_1")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_2.t_2")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_2.t_3")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_2.t_4")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_2.t_5")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_2.t_6")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_2.t_7")}
                <br/> - {t("pages.policy_privacy_page.text.p3.p3_2.t_8")}
                <br/>4. {t("pages.policy_privacy_page.text.p4.p4_header")}
                <br/>4.1. {t("pages.policy_privacy_page.text.p4.p4_1.p4_1_header")}
                <br/> - {t("pages.policy_privacy_page.text.p4.p4_1.t_1")}
                <br/> - {t("pages.policy_privacy_page.text.p4.p4_1.t_2")}
                <br/> - {t("pages.policy_privacy_page.text.p4.p4_1.t_3")}
                <br/> - {t("pages.policy_privacy_page.text.p4.p4_1.t_4")}
                <br/> - {t("pages.policy_privacy_page.text.p4.p4_1.t_5")}
                <br/> - {t("pages.policy_privacy_page.text.p4.p4_1.t_6")}
                <br/>4.2. {t("pages.policy_privacy_page.text.p4.p4_2.p4_2_header")}
                <br/> - {t("pages.policy_privacy_page.text.p4.p4_2.t_1")}
                <br/> - {t("pages.policy_privacy_page.text.p4.p4_2.t_2")}
                <br/>4.3. {t("pages.policy_privacy_page.text.p4.p4_3")}
                <br/>5. {t("pages.policy_privacy_page.text.p5.p5_header")}
                <br/>5.1. {t("pages.policy_privacy_page.text.p5.p5_1")}
                <br/>5.2. {t("pages.policy_privacy_page.text.p5.p5_2")}
                <br/>5.3. {t("pages.policy_privacy_page.text.p5.p5_3")}
                <br/>5.4. {t("pages.policy_privacy_page.text.p5.p5_4")}
                <br/>5.5. {t("pages.policy_privacy_page.text.p5.p5_5")}
                <br/>5.6. {t("pages.policy_privacy_page.text.p5.p5_6")}
                <br/>5.7. {t("pages.policy_privacy_page.text.p5.p5_7")}
                <br/>5.8. {t("pages.policy_privacy_page.text.p5.p5_8")}
                <br/>5.8.1 {t("pages.policy_privacy_page.text.p5.p5_8_1")}
                <br/>5.8.2 {t("pages.policy_privacy_page.text.p5.p5_8_2")}
                <br/>5.8.3 {t("pages.policy_privacy_page.text.p5.p5_8_3")}
                <br/>5.8.4 {t("pages.policy_privacy_page.text.p5.p5_8_4")}
                <br/>6. {t("pages.policy_privacy_page.text.p6.p6_header")}
                <br/>6.1. {t("pages.policy_privacy_page.text.p6.p6_1")}
                <br/>6.2. {t("pages.policy_privacy_page.text.p6.p6_2")}
                <br/>6.3. {t("pages.policy_privacy_page.text.p6.p6_3")}
                <br/>6.4. {t("pages.policy_privacy_page.text.p6.p6_4")}
                <br/>6.5. {t("pages.policy_privacy_page.text.p6.p6_5")}
                <br/>6.6. {t("pages.policy_privacy_page.text.p6.p6_6")}
                <br/>6.7. {t("pages.policy_privacy_page.text.p6.p6_7")}
                <br/>7. {t("pages.policy_privacy_page.text.p7.p7_header")}
                <br/>7.1. {t("pages.policy_privacy_page.text.p7.p7_1.p7_1_header")}
                <br/> - {t("pages.policy_privacy_page.text.p7.p7_1.t_1")}
                <br/> - {t("pages.policy_privacy_page.text.p7.p7_1.t_2")}
                <br/>7.2. {t("pages.policy_privacy_page.text.p7.p7_2")}
                <br/>7.3. {t("pages.policy_privacy_page.text.p7.p7_3")}
                <br/>8. {t("pages.policy_privacy_page.text.p8.p8_header")}
                <br/>8.1. {t("pages.policy_privacy_page.text.p8.p8_1.p8_1_header")}
                <br/> - {t("pages.policy_privacy_page.text.p8.p8_1.t_1")}
                <br/> - {t("pages.policy_privacy_page.text.p8.p8_1.t_2")}
                <br/> - {t("pages.policy_privacy_page.text.p8.p8_1.t_3")}
                <br/> - {t("pages.policy_privacy_page.text.p8.p8_1.t_4")}
                <br/>8.2. {t("pages.policy_privacy_page.text.p8.p8_2")}
                <br/>8.3. {t("pages.policy_privacy_page.text.p8.p8_3")}
                <br/>8.4. {t("pages.policy_privacy_page.text.p8.p8_4")}
                <br/>9. {t("pages.policy_privacy_page.text.p9.p9_header")}
                <br/>9.1. {t("pages.policy_privacy_page.text.p9.p9_1")}
                <br/>9.2. {t("pages.policy_privacy_page.text.p9.p9_2")}
                <br/>9.3. {t("pages.policy_privacy_page.text.p9.p9_3")}
                <br/>9.4. {t("pages.policy_privacy_page.text.p9.p9_4")}
                <br/>9.5. {t("pages.policy_privacy_page.text.p9.p9_5")}
                <br/>9.6. {t("pages.policy_privacy_page.text.p9.p9_6")}
                <br/>9.7. {t("pages.policy_privacy_page.text.p9.p9_7")}
                <br/>10. {t("pages.policy_privacy_page.text.p10.p10_header")}
                {t("pages.policy_privacy_page.text.p10.text")}
                <br/>10.1. {t("pages.policy_privacy_page.text.p10.p10_1")}
                <br/>10.2. {t("pages.policy_privacy_page.text.p10.p10_2")}
                <br/>10.3. {t("pages.policy_privacy_page.text.p10.p10_3")}
                <br/>10.4. {t("pages.policy_privacy_page.text.p10.p10_4")}
                {t("pages.policy_privacy_page.text.p10.p10_4_text")}
                <br/>10.5. {t("pages.policy_privacy_page.text.p10.p10_5")}
                <br/>10.6. {t("pages.policy_privacy_page.text.p10.p10_6")}
                <br/>10.7. {t("pages.policy_privacy_page.text.p10.p10_7")}
                <br/>10.8. {t("pages.policy_privacy_page.text.p10.p10_8")}
                <br/>10.9. {t("pages.policy_privacy_page.text.p10.p10_9")}
                <br/>11. {t("pages.policy_privacy_page.text.p11.p11_header")}
                <br/>11.1. {t("pages.policy_privacy_page.text.p11.p11_1")}
                <br/>11.2. {t("pages.policy_privacy_page.text.p11.p11_2")}
                <br/>12. {t("pages.policy_privacy_page.text.p12.p12_header")}
                <br/>12.1. {t("pages.policy_privacy_page.text.p12.p12_1")}
                <br/>12.2. {t("pages.policy_privacy_page.text.p12.p12_2")}
                <br/>13. {t("pages.policy_privacy_page.text.p13.p13_header")}
                {t("pages.policy_privacy_page.text.p13.p13_text")}
                <br/>14. {t("pages.policy_privacy_page.text.p14.p14_header")}
                <br/>14.1. {t("pages.policy_privacy_page.text.p14.p14_1")}
                <br/>14.2. {t("pages.policy_privacy_page.text.p14.p14_2")}
                <br/>14.3. {t("pages.policy_privacy_page.text.p14.p14_3")}
            </p>

            <button className={`btn btn-primary btn_inside ${styles.btn_width}`} type="button" onClick={() => navigate(-1)}>
                {t("buttons.back")}
            </button>
        </div>
    )
}