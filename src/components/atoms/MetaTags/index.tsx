import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const MetaTags = () => {
  const { t } = useTranslation("commons");
  return (
    <Helmet>
      <meta name="description" content={t("metaDescription")} />
      <meta
        name="keywords"
        content="Portifolio, developer, frontend, React Native"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Michel Raupp" />
    </Helmet>
  );
};

export default MetaTags;
