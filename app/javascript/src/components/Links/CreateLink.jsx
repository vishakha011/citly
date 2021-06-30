import React from "react";
import Button from "components/Button";
import LinkForm from "components/Links/Form/LinkForm";

const CreateLink = ({ link, setLink, handleSubmit }) => {
  return (
    <div className="flex justify-between">
      <LinkForm link={link} setLink={setLink} handleSubmit={handleSubmit} />
      {/* <Button 
        type="button" 
        buttonText="📥 Reports" 
       /> */}
    </div>
  );
};

export default CreateLink;
