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
    const fetchCall = async () => {
      const fetchContent = await fetch(
        "https://api.github.com/repos/" + fullPath
      );

      const fetchResponse = await fetchContent.json();

      const splitResponse = fetchResponse.name.split(".");
      const lastItem = splitResponse[splitResponse.length - 1];

      const iconsExtensions = ["jpg", "png", "ico", "svg"];
      const textAcceptedExt = Object.keys(repoLangs);
      textAcceptedExt.push("txt", "md", "json", "gitignore");

      const decodedData = decode(fetchResponse.content);
      const extractLanguage = detectLang(decodedData);

      if (iconsExtensions.some((element) => element.includes(lastItem))) {
        setEncryptedPhotoExtension(lastItem);
        setEncryptedPhoto(fetchResponse);
      } else if (
        textAcceptedExt.includes(extractLanguage) ||
        textAcceptedExt.includes(lastItem)
      ) {
        const decodedData = decode(fetchResponse.content);

        setFileText(decodedData);
      } else {
        setFileText("Incarca n pula mea un file acceptabil");
      }
    };

    fetchCall();
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
