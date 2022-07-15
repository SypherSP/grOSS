import React, { useEffect, useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import "./SecurityResult.css"

function SecurityResult(props) {
  const [infoScan, setInfoScan] = useState([]);
  const [njsScan, setNjsScan] = useState([]);
  const [pyScan, setPyScan] = useState([]);
  const [rbScan, setRbScan] = useState([]);

  const showLineNumbers = false;
  useEffect(() => {
    setInfoScan(props.data.info_scan);
    setNjsScan(props.data.njs_scan);
    setPyScan(props.data.py_scan);
    setRbScan(props.data.rb_scan);
  }, []);

  return (
    <>
      {infoScan.length > 0 && (
        <div
          className="accordion accordion-flush"
          style={{
            margin: "5% 5% 2% 5%",
            backgroundColor: "#0d1117",
            border: "1px #30363d solid",
          }}
          id="info_scan"
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "#0d1117" }}
          >
            <h2 className="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#info_scan1"
                aria-expanded="true"
                aria-controls="info_scan1"
                style={{backgroundColor: "#30363d", color: "#86b7fe"}}
              >
                Potentially Sensitive Information
              </button>
            </h2>
            <div
              id="info_scan1"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#info_scan"
            >
              <div class="accordion-body">
                <div className="accordion accordion-flush">
                  {infoScan.map((res,idx) => (
                    <div
                      className="accordion-item"
                      style={{
                        backgroundColor: "#0d1117",
                        border: "1px #30363d solid",
                        color: "#fff",
                      }}
                    >
                      <div className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#info" + idx}
                          aria-expanded="true"
                          aria-controls={"info" + idx}
                          style={{backgroundColor: "#30363d", color: "#86b7fe"}}
                        >
                          File : {res.file}
                        </button>
                      </div>
                      <div
                        id={"info" + idx}
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>Type : {res.what}</p>
                          <p>Value : {res.value}</p>
                          <p>
                            {" "}
                            Matching Code :
                            <CodeBlock
                              text={res.match}
                              showLineNumbers={showLineNumbers}
                              theme={dracula}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {rbScan.length > 0 && (
        <div
          className="accordion"
          style={{
            margin: "5% 5% 2% 5%",
            backgroundColor: "#0d1117",
            border: "1px #30363d solid",
          }}
          id="rb_scan"
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "#0d1117" }}
          >
            <h2 className="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#rb_scan1"
                aria-expanded="true"
                aria-controls="rb_scan1"
                style={{backgroundColor: "#30363d",color: "#86b7fe"}}
              >
                Static Ruby code analysis
              </button>
            </h2>
            <div
              id="rb_scan1"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#rb_scan"
            >
              <div class="accordion-body">
                <div className="accordion">
                  {rbScan.map((res, idx) => (
                    <div
                      className="accordion-item"
                      style={{
                        backgroundColor: "#0d1117",
                        border: "1px #30363d solid",
                        color: "#fff",
                      }}
                    >
                      <div className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={ "#rb" + idx }
                          aria-expanded="true"
                          aria-controls={"rb" + idx}
                          style={{backgroundColor: "#30363d",color: "#86b7fe"}}
                        >
                          <b>{res.heading}</b>
                        </button>
                      </div>
                      <div
                        id={"rb" + idx}
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#rb_scan1"
                      >
                        <div className="accordion-body">
                          <p>Confidence : {res.confidence}</p>
                          <p>File name : {res.filename}</p>
                          <p>
                            Line number : {res.line_no}
                            {!!res.code && (
                              <CodeBlock
                                text={res.code}
                                language="ruby"
                                showLineNumbers={showLineNumbers}
                                theme={dracula}
                              />
                            )}
                          </p>
                          <p>Description : {res.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {pyScan.length > 0 && (
        <div
          className="accordion"
          style={{
            margin: "5% 5% 2% 5%",
            backgroundColor: "#0d1117",
            border: "1px #30363d solid",
          }}
          id="py_scan"
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "#0d1117" }}
          >
            <h2 className="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#py_scan1"
                aria-expanded="true"
                aria-controls="py_scan1"
                style={{backgroundColor: "#30363d",color: "#86b7fe"}}
              >
                Static Python code analysis
              </button>
            </h2>
            <div
              id="py_scan1"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#py_scan"
            >
              <div class="accordion-body">
                <div className="accordion">
                  {pyScan.map((res, idx) => (
                    <div
                      className="accordion-item"
                      style={{
                        backgroundColor: "#0d1117",
                        border: "1px #30363d solid",
                        color: "#fff",
                      }}
                    >
                      <div className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#py" + idx}
                          aria-expanded="true"
                          aria-controls={"py" + idx}
                          style={{backgroundColor: "#30363d",color: "#86b7fe"}}
                        >
                          <b>{res.heading}</b>
                        </button>
                      </div>
                      <div
                        id={"py" + idx}
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#py_scan1"
                      >
                        <div className="accordion-body">
                          <p>Severity : {res.severity}</p>
                          <p>Confidence : {res.confidence}</p>
                          <p>CWE ID : {res.cwe.id}</p>
                          <p>CWE Link : {res.cwe.link}</p>
                          <p>File name : {res.filename}</p>
                          <p>
                            Line number : {res.line_no}
                            <CodeBlock
                              text={res.code}
                              language="python"
                              showLineNumbers={showLineNumbers}
                              theme={dracula}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {njsScan.length > 0 && (
        <div
          className="accordion"
          style={{
            margin: "5% 5% 2% 5%",
            backgroundColor: "#0d1117",
            border: "1px #30363d solid",
          }}
          id="nj_scan"
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "#0d1117" }}
          >
            <h2 className="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nj_scan1"
                aria-expanded="true"
                aria-controls="nj_scan1"
                style={{backgroundColor: "#30363d",color: "#86b7fe"}}
              >
                Static Node JS code analysis
              </button>
            </h2>
            <div
              id="nj_scan1"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#nj_scan"
            >
              <div class="accordion-body">
                <div className="accordion">
                  {njsScan.map((res,idx) => (
                    <div
                      className="accordion-item"
                      style={{
                        backgroundColor: "#0d1117",
                        border: "1px #30363d solid",
                        color: "#fff",
                      }}
                    >
                      <div className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#nj" + idx}
                          aria-expanded="true"
                          aria-controls={"nj" + idx}
                          style={{backgroundColor: "#30363d",color: "#86b7fe"}}
                        >
                          <b>{res.heading}</b>
                        </button>
                      </div>
                      <div
                        id={"nj" + idx}
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#nj_scan1"
                      >
                        <div className="accordion-body">
                          <p>Severity : {res.severity}</p>
                          <p>Confidence : {res.confidence}</p>
                          <p>CWE: {res.cwe}</p>
                          <p>File name : {res.filename}</p>
                          <p>Line number : {res.line_no}</p>
                          <p>Code : {res.code}</p>
                          <CodeBlock
                            text={res.code}
                            language="javascript"
                            showLineNumbers={showLineNumbers}
                            theme={dracula}
                          />
                          <p>Description : {res.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SecurityResult;
