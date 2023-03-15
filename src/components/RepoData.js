import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextFilesData from "./TextFilesData";
import { Navigate, useNavigate } from "react-router-dom";

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

  const [isClicked, setIsClicked] = useState(true);

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
      <div className="repository_details">
        <div>{displayRepoRouting}</div>
        <ArrowBackIcon className="arrow_icons" onClick={goBack} />
        {console.log(repoContent)}
        {repoContent?.map((content) =>
          content.type === "dir" ? (
            <>
              <div
                className="folder_and_txt_icons"
                key={content.name}
                onClick={() => {
                  handleRouting(content);
                }}
              >
                <FolderIcon className="repo_icon" />
                <div>{content.name}</div>
              </div>
            </>
          ) : (
            <div
              className="folder_and_txt_icons"
              key={content.name}
              onClick={() => {
                setModal({ contentOfFile: content, isShowing: true });
              }}
            >
              <ArticleIcon className="repo_icon" />
              <div>{content.name}</div>
            </div>
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
