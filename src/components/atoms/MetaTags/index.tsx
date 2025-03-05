import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const MetaTags = () => {
  const { t } = useTranslation("commons");
  return (
    <Helmet>
      <meta name="description" content={t("metaDescription")} />
    </Helmet>
  );
};

export default MetaTags;
