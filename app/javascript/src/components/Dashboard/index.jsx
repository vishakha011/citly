import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import ListLinks from "components/Links/ListLinks";
import CreateLink from "components/Links/CreateLink";
import PageLoader from "components/PageLoader";
import linksApi from "apis/links";

const Dashboard = ({ history }) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);

  const fetchLinks = async () => {
    try {
      const response = await linksApi.list();
      logger.info(response);
      setLinks(response.data.links);
      setPageLoading(false);
    } catch (error) {
      logger.error(error);
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  if (pageLoading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  if (!either(isNil, isEmpty)(links)) {
    return (
      <Container>
        <CreateLink />
        <ListLinks data={links} />
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-xl leading-5 text-center">
        No links to Show. Go head and create one! 😔
      </h1>
      <div className="mt-6">
        <CreateLink />
      </div>
    </Container>
  );
};

export default Dashboard;
