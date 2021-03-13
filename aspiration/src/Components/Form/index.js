import React from "react";

function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Topic</strong>
        </label>
        <input
          className="form-control"
          id="Topic"
          type="text"
          value={query}
          placeholder="html"
          name="q"
          onChange={handleInputChange}
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
