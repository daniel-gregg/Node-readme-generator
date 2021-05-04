const licenses = [
    {
      "key": "agpl-3.0",
      "name": "GNU Affero General Public License v3.0",
      "spdx_id": "AGPL-3.0",
      "url": "https://api.github.com/licenses/agpl-3.0",
      "node_id": "MDc6TGljZW5zZTE=",
      "badge": "https://img.shields.io/badge/License-AGPL%20v3-blue.svg",
    },
    {
      "key": "apache-2.0",
      "name": "Apache License 2.0",
      "spdx_id": "Apache-2.0",
      "url": "https://api.github.com/licenses/apache-2.0",
      "node_id": "MDc6TGljZW5zZTI=",
      "badge": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    },
    {
      "key": "bsd-2-clause",
      "name": "BSD 2-Clause \"Simplified\" License",
      "spdx_id": "BSD-2-Clause",
      "url": "https://api.github.com/licenses/bsd-2-clause",
      "node_id": "MDc6TGljZW5zZTQ=",
      "badge": "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg",
    },
    {
      "key": "bsd-3-clause",
      "name": "BSD 3-Clause \"New\" or \"Revised\" License",
      "spdx_id": "BSD-3-Clause",
      "url": "https://api.github.com/licenses/bsd-3-clause",
      "node_id": "MDc6TGljZW5zZTU=",
      "badge": "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
    },
    {
      "key": "bsl-1.0",
      "name": "Boost Software License 1.0",
      "spdx_id": "BSL-1.0",
      "url": "https://api.github.com/licenses/bsl-1.0",
      "node_id": "MDc6TGljZW5zZTI4",
      "badge": "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
    },
    {
      "key": "cc0-1.0",
      "name": "Creative Commons Zero v1.0 Universal",
      "spdx_id": "CC0-1.0",
      "url": "https://api.github.com/licenses/cc0-1.0",
      "node_id": "MDc6TGljZW5zZTY=",
      "badge": "https://licensebuttons.net/l/zero/1.0/80x15.png",
    },
    {
      "key": "epl-2.0",
      "name": "Eclipse Public License 2.0",
      "spdx_id": "EPL-2.0",
      "url": "https://api.github.com/licenses/epl-2.0",
      "node_id": "MDc6TGljZW5zZTMy",
      "badge": "https://img.shields.io/badge/License-EPL%201.0-red.svg",
    },
    {
      "key": "gpl-2.0",
      "name": "GNU General Public License v2.0",
      "spdx_id": "GPL-2.0",
      "url": "https://api.github.com/licenses/gpl-2.0",
      "node_id": "MDc6TGljZW5zZTg=",
      "badge": "https://img.shields.io/badge/License-GPL%20v2-blue.svg",
    },
    {
      "key": "gpl-3.0",
      "name": "GNU General Public License v3.0",
      "spdx_id": "GPL-3.0",
      "url": "https://api.github.com/licenses/gpl-3.0",
      "node_id": "MDc6TGljZW5zZTk=",
      "badge": "https://img.shields.io/badge/License-GPLv3-blue.svg"
    },
    {
      "key": "lgpl-2.1",
      "name": "GNU Lesser General Public License v2.1",
      "spdx_id": "LGPL-2.1",
      "url": "https://api.github.com/licenses/lgpl-2.1",
      "node_id": "MDc6TGljZW5zZTEx",
      "badge": "https://img.shields.io/badge/License-LGPL%20v3-blue.svg"
    },
    {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz",
      "badge": "https://img.shields.io/badge/License-MIT-yellow.svg"
    },
    {
      "key": "mpl-2.0",
      "name": "Mozilla Public License 2.0",
      "spdx_id": "MPL-2.0",
      "url": "https://api.github.com/licenses/mpl-2.0",
      "node_id": "MDc6TGljZW5zZTE0",
      "badge": "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
    },
    {
      "key": "unlicense",
      "name": "The Unlicense",
      "spdx_id": "Unlicense",
      "url": "https://api.github.com/licenses/unlicense",
      "node_id": "MDc6TGljZW5zZTE1",
      "badge": "https://img.shields.io/badge/license-Unlicense-blue.svg"
    }
  ]
  
  const keys = licenses.map(license => license.key)
  const names = licenses.map(license => license.name)
  const urls = licenses.map(license => license.url)
  const badges = licenses.map(license => license.badge)

  module.exports = licenses
  