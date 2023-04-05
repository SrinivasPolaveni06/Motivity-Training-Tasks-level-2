import React from "react";
import "./index.css";

const index = () => {
  return (
    <>
      <div
        className="accordion accordion-flush mt-5 ms-0 card1"
        id="accordionFlushExample"
      >
        <div className="accordion-item ">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button  text-dark fw-bold collapsed card1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Default work Flow
              <span className="fw-100 ms-5 mt-1 h6">
                This is a default work flow
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body  card3">
              <table>
                <tr>
                  <td>
                    <span>0</span>Sourced
                  </td>

                  <td>
                    <span>1</span>Applied
                  </td>

                  <td>
                    <span>2</span>Matched
                  </td>

                  <td>
                    <span>3</span>Prescreen
                  </td>

                  <td>
                    <span>4</span>Interview
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0</span>Sourced
                  </td>

                  <td>
                    <span>1</span>Applied
                  </td>

                  <td>
                    <span>2</span>Matched
                  </td>

                  <td>
                    <span>3</span>Prescreen
                  </td>

                  <td>
                    <span>4</span>Interview
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
