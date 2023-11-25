![enter image description here](https://img.shields.io/badge/Author-Meganitrospeed-red) [![CodeFactor](https://www.codefactor.io/repository/github/meganitrospeed/ip_history/badge)](https://www.codefactor.io/repository/github/meganitrospeed/ip_history) ![enter image description here](https://img.shields.io/maintenance/yes/2022)
# IP History
This is a project made to get info about the IP change rates, how long the ISP´s mantain the IPs assigned and if they have any regards for GeoLocation providers ( not assigning completely remote IPs to other regions)


## 🚩 Table of Contents

- [What we worked with](#-tools)
- [Features](#-features)
- [License](#-license)
- [Setup](#-setup)

## 🔧 Tools
This project is a WIP so this list may be expanded, but to this day I have worked with

 - WebStorm
 - Ionic
 - React
 - Axios
 - IPInfo API
 - Prisma DB
 - Prisma Studio

## 🎨 Features
  - Continous running
  - Prisma implementation for easy DB switching and migration
  - Low performance impact
  - Very stable, can be left running for longs periods
  
## Setup

There is an additional part for setup which is [IP_History_web](https://github.com/Meganitrospeed/ip_history_web) which is a GUI made in Ionic+React for the easy visualisation of the recollected data

Steps:
 - Get an API Token from ipinfo.io
 - Ensure you have installed: NodeJS and a working Postgre server
 - Add the token in app.js in line 33
 - Add the DB credentials in prisma/schema.prisma
 - Run npm instal and npm prisma migrate
 - Run the project!
 
 Suggestions: If you want to run this to recollect data/in a production environment, pair it with something like [NSSM](https://nssm.cc/)

## 📜 License

The MIT License (MIT)

Copyright (c) 2022 Meganitrospeed

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
[![Download Latest linux](https://img.shields.io/badge/Download-linux-brightgreen)](./dist/app-linux)
