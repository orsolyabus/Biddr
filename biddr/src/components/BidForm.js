import React from "react";

const BidForm = props => {
  // const handleSubmit = event => {
  //   event.preventDefault();

  //   const { currentTarget } = event;
  //   const formData = new FormData(currentTarget);

  //   props.onSubmit({
  //     offer: formData.get("offer"),
  //   });

  //   currentTarget.reset();
  // };
  return (
    <form className="QuestionForm"> {/*onSubmit={handleSubmit}*/}
      <div>
        <label htmlFor="offer">offer</label> <br />
        <input name="offer" id="offer" />
        {/* <FormErrors forField="offer" errors={props.errors} /> */}
      </div>
     
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default BidForm
