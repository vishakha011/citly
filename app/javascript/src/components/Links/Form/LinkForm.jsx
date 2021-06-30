import React from "react";

import Input from "components/Input";
import Button from "components/Button";

const LinkForm = ({ link, setLink, loading, handleSubmit }) => {
  return (
    <>
      <div className="flex-grow">
        <form
          className="w-full flex shadow rounded text-sm"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Enter a Url to shorten..."
            value={link}
            onChange={e => setLink(e.target.value)}
          />
          <div>
            <Button type="submit" buttonText="Shorten!" loading={loading} />
          </div>
        </form>
      </div>
    </>
  );
};

export default LinkForm;
