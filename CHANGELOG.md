# v0.1.10
## 08/12/2022

1. [](#new)
    * _BREAKING CHANGE:_ More flexible fontawesome icons for footer. Please update your theme configuration file in accordance with changes mentioned under [Customizations](https://github.com/ParitoshBh/grav-coder#customizations). Refer to `icon` value. It now needs `fab` prefix. Thanks [@EpicLPer](https://github.com/EpicLPer).

# v0.1.9
## 09/23/2021

1. [](#new)
    * Add support for `rel: me`. Thanks [@Habmala](https://github.com/Habmala).

# v0.1.8
## 12/25/2020

1. [](#new)
    * Add support for Grav version `1.7.0`.
    * Add support for loading jquery debugging. Only enabled when debugging is enabled.
    * Add option to show login/logout link in navbar.
    * Show tags (below categories) as part of taxonomy. Thanks [@akisys](https://github.com/akisys).
1. [](#bugfix)
    * Attempt to fix navigation on item detail page. Hopefully this time for good.

# v0.1.7
## 09/09/2020

1. [](#bugfix)
    * Attempt fixing navigation on item detail page [#18](https://github.com/ParitoshBh/grav-coder/issues/18). Thanks [@HymieAli](https://github.com/HymieAli).

# v0.1.6
## 12/30/2019

1. [](#bugfix)
    * Include host value when building page navigation (newer) slug. Fixes [#16](https://github.com/ParitoshBh/grav-coder/issues/16)

# v0.1.5
## 11/21/2019

1. [](#bugfix)
    * Include host value when building page navigation slug. Fixes [#16](https://github.com/ParitoshBh/grav-coder/issues/16)

# v0.1.4
## 08/22/2019

1. [](#new)
    * Highlight selected page in navbar. Thanks [@samuelstein](https://github.com/samuelstein)
    * Overwrite or extend styles using `custom.css`. Thanks [@samuelstein](https://github.com/samuelstein)
1. [](#bugfix)
    * Comma separated categories (on blog entry page). Fixes [#11](https://github.com/ParitoshBh/grav-coder/issues/11)

# v0.1.3
## 05/16/2019

1. [](#new)
    * Add pagination support.

# v0.1.2
## 05/10/2019

1. [](#new)
    * Activate category listing url.
    * Automatically generate copyright year (current year). Add ability to define start year.
    * Add instructions for setting up homepage, blog listing page and navigation bar menu items.
1. [](#bugfix)
    * Use bootstrap btn class for building footer social icons. Fixes issue with using `researchgate` fontawesome icon.
    * Show page titles correctly.

# v0.1.1
## 9/25/2018

1. [](#new)
    * Added option to show navigation links (previous/next) on post page (enabled by default), to disable it,
        ```
        post:
            navigation: false
        ```
    * Added placeholder image for Grav marketplace!

# v0.1.0
##  08/26/2018

1. [](#new)
    * Marketplace release!
