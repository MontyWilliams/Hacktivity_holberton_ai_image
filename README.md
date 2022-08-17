# Sass: Partials
partials must start with an '_' if you dont want them to be compiled into a  .css file

# Fonts ## @font-face
using the @font-face method for the fonts. This allows u=you to download and package fonts from 
within the project. Fonts are downloaded as .ttf files and 

```
@font-face {
font-family: "GoldmanBold";
src: local("GoldmanBold"),
 url("./fonts/Goldman/Goldman-Bold.ttf") format("truetype");
font-weight: bold;
}
```
```
.font-face-gm {
 font-family: "GoldmanBold";
}
```
needed to install loader in order for webpack to handle .tff files
