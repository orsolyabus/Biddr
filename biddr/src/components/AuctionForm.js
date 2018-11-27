import React from "react";
import FormErrors from "./FormErrors";

const AuctionForm = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      title: formData.get("title"),
      details: formData.get("details")
    });
  };

  return (
    <form className="AuctionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input name="title" id="title" />
        <FormErrors forField="title" errors={props.errors} />
      </div>
      <div>
        <label htmlFor="details">details</label> <br />
        <textarea name="details" id="details" cols="60" rows="4" />
        <FormErrors forField="details" errors={props.errors} />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AuctionForm;