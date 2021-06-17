import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import ListLinks from "components/Links/ListLinks";
import CreateLink from "components/Links/CreateLink";
import PageLoader from "components/PageLoader";
import linksApi from "apis/links";

const Dashboard = ({ history }) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const [pageLoading, setPageLoading] = useState(true);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      await linksApi.create({ link: { original_url: link } });
      setLink("");
      fetchLinks();
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const handlePinned = async slug => {
    try {
      setLoading(true);
      const response = await linksApi.update(slug);
      fetchLinks();
    } catch (error) {
      logger.error(error);
    }
  };

  const handleClick = visit => {
    setTimeout(() => {
      fetchLinks();
    }, 1000);
    window.open(visit, "_blank");
  };

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const response = await linksApi.list();
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
        <CreateLink
          link={link}
          setLink={setLink}
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <ListLinks
          data={links}
          handleClick={handleClick}
          handlePinned={handlePinned}
        />
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-xl leading-5 text-center">
        No links to show.😔 Go head and create one!
      </h1>
      <div className="mt-6">
        <CreateLink
          link={link}
          setLink={setLink}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </div>
    </Container>
  );
};

export default Dashboard;
