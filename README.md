<p align="center"><img src="./logo.png" /></p>

<h1 align="center">Webshooter</h1>
<h3 align="center">Generates PNG and PDF screenshots from websites</h3>

## Quick Start

### Install (Coming soon, for now, you need to download and build by yourself)

`npm install -g webshooter`

### Take PNG screenshot

```bash
webshooter --format PNG --url https://pt.wikipedia.org/wiki/Lorem_ipsum

# With custom name
webshooter --format PNG --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum --mode Visible

# Only the visible area
webshooter --format PNG --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum --mode Visible

# The entire page
webshooter --format PNG --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum --mode FullPage

# The entire page but sliced into separated images with same size
`webshooter --format PNG --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum --mode FullSplitPage
```

### Take PDF screenshot

```bash
webshooter --format PDF --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum

# With custom paper size (More paper sizes coming soon)
webshooter --format PDF --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum --pdfPapersize A4
webshooter --format PDF --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum --pdfPapersize Letter

# With custom paper orientation
webshooter --format PDF --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum --pdfOrientation Portrait
webshooter --format PDF --url https://pt.wikipedia.org/wiki/Lorem_ipsum --name lorem-ipsum --pdfOrientation Landscape
```
