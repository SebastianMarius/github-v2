import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextFilesData from "../../components/TextFileData/TextFilesData";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BackIcon,
  FilesIcons,
  FolderImage,
  ArticleImage,
} from "./RepoDataStyledComponent";

export default function RepoData(props) {
  const { repoName: repositoryName } = useParams();
  const [switchingRepo, setSwitchingRepo] = useState(false);

  const { repoLangs } = props;
  const [modal, setModal] = useState({
    isShowing: false,
    contentOfFile: "",
  });

  const [repoContent, setRepoContent] = useState();
  const [routingRepo, setRoutingRepo] = useState([
    props.userName,
    repositoryName,
    "contents",
  ]);

  // console.log()

  const navigate = useNavigate();

  const repoArray = routingRepo.map((rout) => rout + "/");
  const displayRepoRouting = repoArray.toString().replaceAll(",", "");

  const goBack = () => {
    if (routingRepo.length === 3) {
      navigate("/profile/" + routingRepo[0]);
    }
    if (routingRepo.length > 3) {
      setRoutingRepo((routingRepo) =>
        routingRepo.slice(0, routingRepo.length - 1)
      );

      const routWithoutLast = routingRepo.slice(0, routingRepo.length - 1);

      const arrayOfRouts = routWithoutLast.map((route) => {
        return route + "/";
      });

      const routing = arrayOfRouts.toString().replaceAll(",", "");

      const fetchRepo = async () => {
        const fetchRepoContent = await fetch(
          "https://api.github.com/repos/" + routing
        );

        const repoContent = await fetchRepoContent.json();
        setRepoContent(repoContent);
      };
      fetchRepo();
    }
  };

  const handleRouting = async (content) => {
    if (switchingRepo) {
      return;
    }
    setSwitchingRepo(true);

    setRoutingRepo((routingRepo) => [...routingRepo, content.name]);

    const arrayOfRouts = routingRepo.map((rout) => {
      return rout + "/";
    });

    const routing = arrayOfRouts.toString().replaceAll(",", "");

    const fetchRouting = async () => {
      const responseRouting = await fetch(
        "https://api.github.com/repos/" + routing + content.name
      );

      const response = await responseRouting.json();
      setSwitchingRepo(false);

      setRepoContent(response);
    };
    await fetchRouting();
  };

  useEffect(() => {
    console.log(props.userName, " usernameeee");
    const fetchRepo = async () => {
      const fetchRepoContent = await fetch(
        "https://api.github.com/repos/" +
          props.userName +
          "/" +
          repositoryName +
          "/contents"
      );

      const repoContent = await fetchRepoContent.json();
      setRepoContent(repoContent);
    };
    fetchRepo();
  }, []);

  return (
    <>
      <div>
        <div>{displayRepoRouting}</div>
        <BackIcon onClick={goBack} />
        {console.log(repoContent)}
        {repoContent?.map((content) =>
          content.type === "dir" ? (
            <>
              <FilesIcons
                key={content.name}
                onClick={() => {
                  handleRouting(content);
                }}
              >
                <FolderImage />
                <div>{content.name}</div>
              </FilesIcons>
            </>
          ) : (
            <FilesIcons
              key={content.name}
              onClick={() => {
                setModal({ contentOfFile: content, isShowing: true });
              }}
            >
              <ArticleImage />
              <div>{content.name}</div>
            </FilesIcons>
          )
        )}
      </div>
      {modal.isShowing && (
        <TextFilesData
          setModal={setModal}
          modal={modal}
          displayRepoRouting={displayRepoRouting}
          routingRepo={routingRepo}
          repoLangs={repoLangs}
        />
      )}
    </>
  );
}
