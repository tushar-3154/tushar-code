require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000

const githubData = {
    "login": "tushar-3154",
    "id": 175339950,
    "node_id": "U_kgDOCnN5rg",
    "avatar_url": "https://avatars.githubusercontent.com/u/175339950?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tushar-3154",
    "html_url": "https://github.com/tushar-3154",
    "followers_url": "https://api.github.com/users/tushar-3154/followers",
    "following_url": "https://api.github.com/users/tushar-3154/following{/other_user}",
    "gists_url": "https://api.github.com/users/tushar-3154/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tushar-3154/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tushar-3154/subscriptions",
    "organizations_url": "https://api.github.com/users/tushar-3154/orgs",
    "repos_url": "https://api.github.com/users/tushar-3154/repos",
    "events_url": "https://api.github.com/users/tushar-3154/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tushar-3154/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Tushar Solanki",
    "company": null,
    "blog": "",
    "location": "gujarat",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-07-11T16:17:17Z",
    "updated_at": "2025-05-22T07:03:23Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send("tushar");
});

app.get('/login', (req, res) => {
    res.send('<h1>Please Login tushar code</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Tushar Or Code</h2>');
});

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
});