# Grav Coder

Grav Coder is a fork of [Hugo Coder](https://github.com/luizdepra/hugo-coder) and derived from customizations made to it by [Khosrow Moossavi](https://github.com/khos2ow) for his own personal website.

![Grav Coder](assets/screenshot.png)

# Installation

Installing the Grav Coder theme can be done in one of two ways. The GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

### GPM Installation (Preferred)

The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line). From the root of your Grav install type:

    bin/gpm install grav-coder

This will install the Grav Coder theme into your `/user/themes` directory within Grav. Its files can be found under `/yoursite/user/themes/grav-coder`.

### Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/yoursite/user/themes`. Then, rename the folder to `grav-coder`. You can find these files either on [GitHub](https://github.com/ParitoshBh/grav-coder) or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under

    /yoursite/user/themes/grav-coder

# Updating

As development for the Grav Coder theme continues, new versions may become available that add additional features and functionality, improve compatibility with newer Grav releases, and generally provide a better user experience. Updating Grav Coder is easy, and can be done through Grav's GPM system, as well as manually.

### GPM Update (Preferred)

The simplest way to update this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm). You can do this with this by navigating to the root directory of your Grav install using your system's Terminal (also called command line) and typing the following:

    bin/gpm update grav-coder

This command will check your Grav install to see if your Grav Coder theme is due for an update. If a newer release is found, you will be asked whether or not you wish to update. To continue, type `y` and hit enter. The theme will automatically update and clear Grav's cache.

### Manual Update

Manually updating Grav Coder is pretty simple. Here is what you will need to do to get this done:

* Delete the `yoursite/user/themes/grav-coder` directory.
* Download the new version of the Grav Coder theme from either [GitHub](https://github.com/ParitoshBh/grav-coder) or [GetGrav.org](http://getgrav.org/downloads/themes#extras).
* Unzip the zip file in `yoursite/user/themes` and rename the resulting folder to `grav-coder`.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in terminal and typing `bin/grav clear-cache`.

> Note: Any changes you have made to any of the files listed under this directory will also be removed and replaced by the new set. Any files located elsewhere (for example a YAML settings file placed in `user/config/themes`) will remain intact.

# Features

* Lightweight and minimal for optimal performance
* Fontawesome icon support
* Default view template
* Blog view template
* Blog item view template
* Categories view (listing)
* Pagination support (defaults to 10 items per page)
* Taxonomy display support

# Setup

If you want to set Grav Coder as the default theme, you can do so by following these steps:

* Navigate to `/yoursite/user/config`.
* Open the **system.yaml** file.
* Change the `theme:` setting to `grav-coder`.
* Save your changes.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing `bin/grav clear-cache`.

### Homepage Setup

* Navigate to `/yoursite/user/pages`.
* Create `home` directory (remove/rename/backup existing `home` directory, if any)
* Under `home` directory, create `default.md` and put in html content you'd like to see on homepage. Example,
   ```html
    <div class="about">
      <h1>Grav Coder</h1>
      <h2>An Open Source Theme For Grav CMS</h2>
    </div>
   ```

### Blog (Listing) Setup

* Navigate to `/yoursite/user/pages`.
* Create `01.blog` directory
* Under `01.blog` directory, create `blog.md` with following content,
   ```md
    ---
    content:
        items: '@self.children'
        order:
            by: date
            dir: desc
        limit: 10
        pagination: true
    metadata:
      description: 'Some description for metadata'
    ---
   ```
* Each blog post would then be a directory under `01.blog` directory. Example, `01.blog/sample-article` directory will have `item.md` in it with contents of the post.

### Navigation Bar Menu Items

For creating additional menu items (apart from `Home`) in nav bar simply create a directory under `user/pages/` eg. `03.Portfolio` (don't forget to increment the numeric value). As of now you can create 2 different types of pages,
1. Containing HTML content - Under `02.portfolio` directory create `default.md` (with html content in it)
1. Listing page (similar to a `blog` page) - Structure is similar to `blog`

Once this is done, you should be able to see the new theme on the frontend.

# Customizations

There are certain sections of the theme you can customize, in order to do so,
* Create `themes` directory under `/yoursite/user/config` (skip this step if it already exists)
* Overwrite or extend styles inside `custom.css` under `/yoursite/user/themes/yourtheme/css`
* Create `grav-coder.yaml` file under `/yoursite/user/config/themes` (this makes sure any configurations made to theme persist when updating the theme)
* Within `grav-coder.yaml` file following configuration are available,
  ```
  navbar:
    # Title in navigation bar
    title: Grav Coder
    # Login link in navbar
    # Note: Logout link appears automatically if enabled in following format,
    # <FULL_NAME>, Logout or <USERNAME>, Logout (if full name isn't available)
    auth_link:
      enabled: false
      login_slug: login
      login_label: Login

  # Copyright text visible in footer and (start) year
  # If 'copyright_start_year' is not defined then it isn't shown
  footer:
    copyright: Grav Coder
    copyright_start_year: 2018

  # Social media icons, displayed in footer, above copyright text
  social:
    github:
      title: Github
      url: <url>
      icon: fab fa-github
      rel: me (disabled by default, add to activate)
    twitter:
      title: Twitter
      url: <url>
      icon: fab fa-twitter
      rel: me (disabled by default, add to activate)
    linkedin:
      title: LinkedIn
      url: <url>
      icon: fab fa-linkedin-in
      rel: me (disabled by default, add to activate)
    stackoverflow:
      title: StackOverflow
      url: <url>
      icon: fab fa-stack-overflow
      rel: me (disabled by default, add to activate)

  # Navigation links (prev/next) on post page (enabled by default)
  # Taxonomy links on post page (enabled by default)
  post:
    navigation: false
    taxonomy: false

  # Pagination - number of items to show per page
  pagination:
    count: 10
  ``` 

A couple of pointers for social media icons, 
* There isn't any limit on how many icons you can add (so be careful not to over crowd the footer)
* Font awesome (ver. 5.2.0) is supported and hence you can use pretty much any icon listed on its [website](https://fontawesome.com/icons?d=gallery) under `icon`
* To add social media icons (apart from those listed above), simply add the following block after `stackoverflow` block
   ```
    facebook:
      title: Facebook
      url: <url>
      icon: fab fa-facebook-f
   ```

# Third Party Libraries Used

In its current iteration, Grav Coder relies on below listed 3rd party libraries,
* Bootstrap (ver. 3.3.7)
* jQuery (slim) (ver. 3.3.1)
* Fontawesome Icons (ver. 5.2.0)
* Google Fonts
* [Normalize.css](https://github.com/necolas/normalize.css) (ver. 8.0.0)
