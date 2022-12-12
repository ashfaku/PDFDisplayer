import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
const PDFPage = () => {
  let term = window.location.hash.split('?')[1].split('=')[1];
  term = decodeURIComponent(term).substring(1);
  //const queryParams = new URLSearchParams(window.location.search);
  //console.log(queryParams.get("fp"));
  //  let term = queryParams.get("fp");
  //term = decodeURIComponent(term.substring(1));
  //console.log(term);
  //let term = '/document.pdf';
  return (
      <Document file={term} >
        <Page pageNumber={5} />
      </Document>
  );
};

export default PDFPage;
