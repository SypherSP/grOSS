import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VulnResults from "../../VulnResults";
import { CodeBlock, dracula } from "react-code-blocks";

function SecurityResult() {
  const [infoScan, setInfoScan] = useState([])
  const [njsScan, setNjsScan] = useState([])
  const [pyScan, setPyScan] = useState([])
  const [rbScan, setRbScan] = useState([])


  const showLineNumbers = false;
  const fetchData = () => {

    fetch("http://localhost:8000/api/repo-sec",{
        method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
        body: JSON.stringify({'url': 'https://github.com/p1xxxel/vulnlauncher'})
    }).then(response => {
        return response.json();
    }).then(data => {
        setInfoScan(data.info_scan)
        setNjsScan(data.njs_scan)
        setPyScan(data.py_scan)
        setRbScan(data.rb_scan)
    })
  }



  useEffect(() => {

    fetchData()

  }, [])


  return (

    <div>

      {infoScan.length > 0 && (

        <div id="info_scan">
        <h2> Potentially Sensitive Information </h2>
        <ul>

          {infoScan.map(res => (

            <div>
            <li>File : {res.file}</li>
            <li>Type : {res.what}</li>
            <li>Value : {res.value}</li>
            <li> Matching Code :
            <CodeBlock
                text={res.match}
                showLineNumbers={showLineNumbers}
                theme={dracula}
            />
            </li>
            </div>

          ))}

        </ul>
        </div>

      )}
      {rbScan.length > 0 && (
          <div id="rb_scan">
          <h2> Static Ruby code analysis </h2>
          <ul>

            {rbScan.map(res => (
                <div>
                    <li><b>{res.heading}</b></li>
                    <li>Confidence : {res.confidence}</li>
                    <li>File name : {res.filename}</li>
                    <li>Line number : {res.line_no}</li>
                    <li>Code : {res.code}</li>
                    <CodeBlock
                        text={res.code}
                        language='ruby'
                        showLineNumbers={showLineNumbers}
                        theme={dracula}
                    />
                    <li>Description : {res.description}</li>
                </div>
            ))}

          </ul>
          </div>

      )}
      {pyScan.length > 0 && (
          <div id="py_scan">
          <h2> Static Python code analysis </h2>
          <ul>

            {pyScan.map(res => (
                <div>
                    <h3>{res.heading}</h3>
                    <li>Severity : {res.severity}</li>
                    <li>Confidence : {res.confidence}</li>
                    <li>CWE ID : {res.cwe.id}</li>
                    <li>CWE Link : {res.cwe.link}</li>
                    <li>File name : {res.filename}</li>
                    <li>Line number : {res.line_no}
                    <CodeBlock
                        text={res.code}
                        language='python'
                        showLineNumbers={showLineNumbers}
                        theme={dracula}
                    />
                    </li>
                </div>
            ))}

          </ul>
          </div>

      )}
      {njsScan.length > 0 && (
          <div id="rb_scan">
          <h2> Static Node JS code analysis </h2>
          <ul>

            {njsScan.map(res => (
                <div>
                    <li><b>{res.heading}</b></li>
                    <li>Severity : {res.severity}</li>
                    <li>Confidence : {res.confidence}</li>
                    <li>CWE: {res.cwe}</li>
                    <li>File name : {res.filename}</li>
                    <li>Line number : {res.line_no}</li>
                    <li>Code : {res.code}</li>
                    <CodeBlock
                        text={res.code}
                        language='javascript'
                        showLineNumbers={showLineNumbers}
                        theme={dracula}
                    />
                    <li>Description : {res.description}</li>
                </div>
            ))}

          </ul>
          </div>

      )}

    </div>

  )
}

export default SecurityResult;
