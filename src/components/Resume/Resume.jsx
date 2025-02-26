import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

// ✅ Public GitHub PDF URL
const pdfUrl = "https://raw.githubusercontent.com/GitForceJedi/resume/main/Kenneth-Crawford-Resume.pdf";

function Resume() {
  const [isIOS, setIsIOS] = useState(false);

  // ✅ Detect if the user is on an iOS device
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* ✅ Download Button (Top) */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "10px", marginBottom: "10px" }}>
          <Button variant="primary" href={pdfUrl} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* ✅ If on iOS, show a direct link instead of an iframe */}
        {isIOS ? (
          <Row className="resume" style={{ justifyContent: "center", marginTop: "20px" }}>
            <p>
              PDF preview is not supported on iOS.{" "}
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                Click here to view the resume.
              </a>
            </p>
          </Row>
        ) : (
          // ✅ Use Google Docs Viewer for non-iOS devices
          <Row className="resume" style={{ justifyContent: "center" }}>
            <iframe
              src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
              width="100%"
              height="800px"
              style={{
                border: "none",
                maxWidth: "900px",
                minHeight: "600px",
                overflow: "auto",
                display: "block",
              }}
              title="Resume"
            />
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Resume;
