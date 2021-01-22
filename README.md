
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
![npm][npm]
![Lines of code][Lines of code]
<br />
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/GoodluckH/rolodex-on-prem">
    <img src="/client/public/favicon.png" width="200" height="200">
  </a>

  <h3 align="center">Rolodex On-Prem Version</h3>

  <p align="center">
    Ditch the spreadsheet! Start managing your professional network whenever and wherever you are.
    <br />
    <a href="https://github.com/GoodluckH/rolodex-on-prem"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rolodex.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/GoodluckH/rolodex-on-prem/issues">Report Bug</a>
    ·
    <a href="https://github.com/GoodluckH/rolodex-on-prem/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#user-interface">User Interface</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <ul>
      <li><a href="#get-connection-string-from-mongodb-atlas">Get Connection String from MongoDB Atlas</a></li>
      <li><a href="#configure-env">Configure ENV</a></li>
      <li><a href="#run!">Run!</a></li>
    </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Rolodex aims to eliminate frictions for professional network management. This repository serves an on-premise version since the project uses MongoDB to store contact information. For now, users need to create their own MongoDB Atlas database to store their own information.

The Rolodex demo communicates with my own Atlas database (open access for all public IPs). For that reason, the demo is more of a crowd-sourced version of Rolodex. Please be civil when trying out the demo because everyone can see what's on the rolodex. 

### User Interface

Rolodex is a simple, one-page web app that mainly consists of three interfaces.

**Loading Page**

[<img src="https://i.ibb.co/2S2D5J4/ezgif-com-gif-maker.gif">](https://i.ibb.co/2S2D5J4/ezgif-com-gif-maker.gif)


**Add Profile Page**

[<img src="https://i.imgur.com/RgFObG3.png"  width="600" height="450">](https://i.imgur.com/RgFObG3.png)

**Rolodex Page**

[<img src="https://i.imgur.com/WoYi9Jp.png"  width="600" height="450">](https://i.imgur.com/WoYi9Jp.png)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description`


### Built With

* [React](https://reactjs.org/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Express](https://expressjs.com/en/guide/using-middleware.html)
* [Node.js](https://nodejs.org/en/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/GoodluckH/rolodex-on-prem.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

Rolodex sends and requests data from MongoDB Atlas. You will need to configure an Atlas cluster to run this project.

### Get Connection String from MongoDB Atlas
Create a [MongoDB Atlas](https://www.mongodb.com/try) account, and create a new cluster (don't forget to whitelist your IP address and to add a user). Once the cluster is configured, click 'Connect' within the sandbox to start the process of generating a [connection string](https://docs.atlas.mongodb.com/reference/faq/connection-changes#std-label-connstring-standard).

[<img src="https://i.imgur.com/gCZcJVQ.png"  width="600" height="450">](https://i.imgur.com/gCZcJVQ.png)

For this project, choose "Connect your application".

[<img src="https://i.imgur.com/caQfUEf.png"  width="600" height="450">](https://i.imgur.com/caQfUEf.png)

You will be able to copy the connection string.


### Configure ENV
Head to `./server/routes`, where you will need to paste the connection string in the `.env.example` file, where the connection string is stored as ATLAS_URI. _Note, don't include the quotation marks_.


### Run!

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/GoodluckH/rolodex-on-prem.svg?style=for-the-badge
[stars-url]: https://github.com/GoodluckH/rolodex-on-prem/stargazers
[issues-shield]: https://img.shields.io/github/issues/GoodluckH/rolodex-on-prem.svg?style=for-the-badge
[issues-url]: https://github.com/GoodluckH/rolodex-on-prem/issues
[license-shield]: https://img.shields.io/github/license/GoodluckH/rolodex-on-prem.svg?style=for-the-badge
[license-url]: https://github.com/GoodluckH/rolodex-on-prem/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/xipuli
[product-screenshot]: images/screenshot.png
[npm]: https://img.shields.io/npm/v/npm.svg?style=for-the-badge
[Lines of code]: https://img.shields.io/tokei/lines/github/GoodluckH/rolodex-on-prem.svg?style=for-the-badge&color=red
