import {useEffect} from "react";
import '../styleing/UserProfile.css'
import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import  {Card, CardActions, CardContent, CardMedia, Button, Typography, Box} from '@mui/material';

function UserData(props) {


    const fetchRepoLangs = ((repositoryName)=> {
        fetch('https://api.github.com/repos/' + props.user.name + repositoryName)
            .then((r) => r.json())
            .then((data) => console.log(data))

        // console.log(repositoryName)
    })
    const {id} = props.repos;

    return (
        <>
            {/*{console.log(props.repos)};*/}
            {/*{console.log(props.repos)}*/}
            {/*{console.log(id)}*/}

            {console.log(props.repos[1].name)}

            <div className='user_section'>
                {/*{JSON.stringify(props.user)}*/}

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    sx={{ height: 300, width: 350}}
                    image={props.user.avatar_url}
                    title="green iguana"
                    />

                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                            {props.user.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {/*{console.log(props.user)}*/}
                            Following: {props.user.following}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Followers: {props.user.followers}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Repos: {props.user.public_repos}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Created at: {props.user.created_at}
                        </Typography>

                    </CardContent>

                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>

                    </CardActions>
                </Card>

                <div className="cards_container">

                    {props.repos.map((repo) => {

                        // console.log(JSON.stringify(repo) + 'pula mea')
                    fetchRepoLangs(repo.name);
                        return(
                            <Card className="repository_card" sx={{  width: 1, height: 202}} id={repo.id}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        benevoent
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            )

                    }

                    )}

                </div>

                    {/*<CardContent>*/}

                    {/*<div className="test">ceva aifqwffqfqqwfci</div>*/}
                    {/*<div className="test">ceva aicfwfwqfpoqlfkoqfkqpi</div>*/}
                    {/*<div className="test">ceva aicifkwqokopfpqkfpqk</div>*/}
                    {/*<div className="test">ceva aicifkwqokopfpqkfpqk</div>*/}
                    {/*<div className="test">ceva aicifkwqokopfpqkfpqk</div>*/}
                    {/*<div className="test">ceva aicifkwqokopfpqkfpqk</div>*/}
                    {/*<div className="test">ceva aicifkwqokopfpqkfpqk</div>*/}

                    {/*</CardContent>*/}


            </div>
        </>
    )

}

export default UserData;