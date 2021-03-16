import React from "react";


function Form (props) {

  function handleFormSubmit(e) {
    e.preventDefault();
    const searchTerm = document.getElementById("searchTerm").value.trim();
    console.log("Button was clicked and the topic is", searchTerm);
    if (searchTerm.length === 0){
      alert ("Please enter a topic");
      return;
    }
    props.call(searchTerm.toLowerCase());
  };

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Topic</strong>
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="html"
          name="topic"
          id="searchTerm"
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-info float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;

