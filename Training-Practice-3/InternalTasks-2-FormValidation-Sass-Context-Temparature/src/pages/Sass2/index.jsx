import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.scss";

const Index = () => {
  return (
    <>
      <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="title-name h5 text-dark mb-0">
                Default Workflow
              </span>
              <span className="text-dark-blue ms-3 mb-0 fw-400">
                This is a default Workflow
              </span>
              <span className="text-dark-blue lock-icon">
                <i class="bi bi-lock-fill"></i>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="pt-2 breadcrumbSmall">
                <div className="row innerSmall">
                  <ul className="cfSmall">
                    <li>
                      <a>
                        <span className="pt-6px">0</span>
                        <span>Sourced</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="pt-6px">1</span>
                        <span>Applied</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="pt-6px">2</span>
                        <span>Matched</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="pt-6px">3</span>
                        <span>Prescreen</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="pt-6px">4</span>
                        <span>Interview</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="pt-6px">5</span>
                        <span>Test</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="pt-6px">6</span>
                        <span>Reference checks</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="pt-6px  ">7</span>
                        <span>Backcheck</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="pt-6px  ">8</span>
                        <span>Offer</span>
                      </a>
                    </li>

                    <li>
                      <a className="p-2">
                        <span className="d-none"></span>
                        <span>
                          Hired
                          <hr className="my-1 mx-3 section-separator section-separator-light-blue" />
                          Rejected
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
