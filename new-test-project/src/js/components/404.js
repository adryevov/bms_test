import React, { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {useMetaInfo} from "../utils/hooks";
import {Container} from "react-bootstrap";

const PageNotFound = () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Page Not Found");
    updateMetaDescription("Page Not Found.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <Fragment>
      <Header />

      <section className="page-not-found-section">
        <Container>
          <h1>Requested page was not found!</h1>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default React.memo(PageNotFound);
