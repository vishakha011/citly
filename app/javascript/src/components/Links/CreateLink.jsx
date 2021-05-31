// const handleSubmit = async event => {
//   event.preventDefault();
//   setLoading(true);
//   try {
//     await linksApi.create({ link: { original_url: link }});
//     fetchLinks();
//   } catch (error) {
//     logger.error(error);
//     setLoading(false);
//   }
// }

import React, { useState } from "react";
import Container from "components/Container";
import Button from "components/Button";
import LinkForm from "components/Links/Form/LinkForm";
import linksApi from "apis/links";

const CreateLink = ({ history }) => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await linksApi.create({ link: { original_url: link } });
      setLoading(false);
      history.push("/dashboard");
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between">
      <LinkForm
        link={link}
        setLink={setLink}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Button type="button" buttonText="📥 Reports" loading={loading} />
    </div>
  );
};

export default CreateLink;
