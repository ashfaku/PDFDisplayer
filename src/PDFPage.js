import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
const PDFPage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  let term = queryParams.get("fp");
  console.log(term);
  return (
      <Document file={decodeURIComponent(term.substring(1))} >
        <Page pageNumber={5} />
      </Document>
  );
};

export default PDFPage;
