import React, { useEffect, useState } from "react";
import { decode } from "base-64";
import RepoModal from "../styling/RepoModal.css";
import CloseIcon from "@mui/icons-material/Close";
import SyntaxHighlighter from "react-syntax-highlighter";
import detectLang from "lang-detector";

export default function TextFilesData(props) {
  const [fileText, setFileText] = useState();
  const [encryptedPhoto, setEncryptedPhoto] = useState();
  const [encryptedPhotoExtension, setEncryptedPhotoExtension] = useState();

  const { setModal, modal, displayRepoRouting, repoLangs } = props;
  const fullPath = displayRepoRouting + modal.contentOfFile.name;

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(`https://api.github.com/repos/${fullPath}`);
      const content = await response.json();
      return content;
    };

    const processContent = (content) => {
      const { name, content: encodedContent } = content;
      const extension = name.split(".").pop();
      const encodedData = decode(encodedContent);
      const language = detectLang(encodedData);
      const acceptableExtensions = [
        ...Object.keys(repoLangs),
        "txt",
        "md",
        "json",
        "gitignore",
      ];
      const isIcon = ["jpg", "png", "ico", "svg"].includes(extension);
      const isText =
        acceptableExtensions.includes(language) ||
        acceptableExtensions.includes(extension);

      if (isIcon) {
        setEncryptedPhotoExtension(extension);
        setEncryptedPhoto(content);
      } else if (isText) {
        setFileText(encodedData);
      } else {
        setFileText("Incarca n pula mea un file acceptabil");
      }
    };

    const fetchData = async () => {
      const content = await fetchContent();
      processContent(content);
    };

    fetchData();
  }, []);

  const ShowImage = ({ encodedImage }) => (
    <img
      className="logo_and_imgs"
      src={`data:image/png;base64,${encodedImage}`}
    />
  );

  return (
    <>
      <div className="modal">
        <div className="modal_container">
          <CloseIcon
            className="x_icon"
            onClick={() => setModal({ ...modal, isShowing: false })}
          />
          <div>
            {encryptedPhoto && (
              <ShowImage
                encodedImage={encryptedPhoto.content}
                extension={encryptedPhotoExtension}
              />
            )}
          </div>

          {fileText && (
            <SyntaxHighlighter
              language="javascript"
              className="content_code"
              showLineNumbers
              lineNumberContainerStyle="1"
            >
              {fileText}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
      ;
    </>
  );
}
