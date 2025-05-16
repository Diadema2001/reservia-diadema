<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<style>
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
<template>
    <div>
        <h1>Bienvenue sur la page Principale</h1>
        <router-view></router-view>
    </div>
</template>
<style>
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

.search-container1{
    background-color: white;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 10px;
    border: 1px solid #EEE;
    padding: 0px;
    padding-bottom: 0px;
    max-width: 350px;
    width: 100%;
    flex-direction: row;
}

.search-container2{
    background-color: white;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 10px;
    border: 2px solid #EEE;
    padding: 0px;
    padding-bottom: 0px;
    max-width: 350px;
    width: 100%;
    flex-direction: row;
    display: none;
}

.search-box{
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0px;
    border-radius: 10px;
    height: 100%;
    justify-content: center;
}

.search-box i{
    color: #555;
    margin-right: 10px;
    height: 100%;
    padding: 12px 15px;
    color: black;
    font-size: 16px;
    background-color: #EEE;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.search-box input{
    border: none;
    outline: none;
    font-size: 14px;
    width: 100%;
}

.search-button{
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 12px 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    height: 100%;
}

.search-button:hover{
    background-color: #0056b3;
}

.search-button1{
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 12px 10px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 22.6px;
    font-weight: bold;
    height: 100%;
}

.search-button1:hover{
    background-color: #0056b3;
}

@media (max-width: 768px){
    .search-container1{
        background-color: white;
        display: flex;
        align-items: center;
        background: white;
        border-radius: 15px;
        border: 1px solid #EEE;
        padding: 0px;
        padding-bottom: 0px;
        max-width: 100%;
        width: 100%;
        flex-direction: row;
        display: none;
    }
    
    .search-container2{
        background-color: white;
        display: flex;
        align-items: center;
        background: white;
        border-radius: 15px;
        border: 2px solid #EEE;
        padding: 0px;
        padding-bottom: 0px;
        max-width: 440px;
        width: 100%;
        flex-direction: row;
    }
    
    .search-box{
        display: flex;
        align-items: center;
        flex: 1;
        padding: 0px;
        border-radius: 15px;
        height: 100%;
        justify-content: center;
    }
    
    .search-box i{
        color: #555;
        margin-right: 10px;
        margin-left: -2px;
        height: 100%;
        padding: 16px 20px;
        color: black;
        font-size: 26px;
        background-color: #EEE;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    
    .search-box input{
        border: none;
        outline: none;
        font-size: 20px;
        width: 90%;
        padding: 16px 16px;
    }
    
    .search-button{
        background-color: #007BFF;
        color: white;
        border: none;
        padding: 16px 16px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        height: 100%;
        display: none;
    }
    
    .search-button1{
        background-color: #007BFF;
        color: white;
        border: none;
        padding: 17px 18px;
        border-radius: 15px;
        cursor: pointer;
        font-size: 22.8px;
        font-weight: bold;
        height: 100%;
        margin: -2px -2px -2px -2px;
    }
}
body{
    background-color: white;
    font-family: "Raleway", sans-serif;
    justify-content: center;
}

h1{
    font-size: 18px;
    margin-top: 20px;
    margin-left: 0px;
    margin-right: 0px;
}

.div1{  /*Ceci est le "header"*/
    background-color: white;
    min-width: 480px;
    max-width: 1200px;
    margin: auto;
    padding: 0px 20px 0px 20px;
    margin-bottom: 0px;
}

.nav{
    display: flex;
    max-height: 70px;
    justify-content: space-between;
    align-items: center;
    margin-top: 0px;
}

.logo{
    height: 40px;
    width: 60%;
    overflow: hidden;
    margin-left: 0px;
    margin-right: 0px;
}

.logo img{
    height: 100%;
    object-fit: cover;
}

.lien-navigation{
    display: block;
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 30%;
    order: 1;
}

.lien-navigation li a{
    text-decoration: none;
    color: black;
    font-size: 14px;
}

.li1{
    display: block;
    width: 50%;
    height: 100%;
    text-align: center;
    margin-top: 0px;
}

.li2{
    display: block;
    width: 50%;
    height: 100%;
    text-align: center;
    margin-top: 0px;
}

nav ul li a{
    display: block;
    width: 100%;
    padding-top: 27px;
    padding-bottom: 27px;
    margin: 0px;
}

nav ul li a:hover{
    color: #007BFF;
    border-top: 2px solid #007BFF;
}


.inscription{
    display: block;
    padding: 20px;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: #007BFF;
    text-align: center;
    width: 10%;
    order: 2;
    border: none;
    background: #FFF;
    cursor: pointer;
}

.inscription:hover{
    font-size: 15px;
    text-shadow: 0px 0px 3px #CCC;
}

.p1{
    font-size: 12px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
}

.titre{
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}

span{
    font-weight: bold;
}

.titre1{
    min-width: 480px;
    max-width: 1200px;
    background-color: white;
    margin: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: bold;
    padding: 20px 20px 0px 20px;
}

.note{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
}

.note i{
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15px;
    width: 15px;
    font-size: 9px;
    color: #007BFF;
    border-radius: 20px;
    border: 1px solid #AAA;
    text-align: center;
}

.note p{
    margin-top: 15px;
    margin-left: 5px;
}
    
@media (max-width: 768px){
    .div1{
        background-color: white;
        min-width: 360px;
        max-width: 768px;
        margin: auto;
        padding: 0px 20px 20px 20px;
        margin-bottom: 0px;
    }
    
    h1{
        font-size: 24px;
        margin-top: 20px;
        margin-left: 0px;
        margin-right: 0px;
    }
    
    .p1{
        font-size: 16px;
        margin-top: 0px;
        margin-left: 0px;
        margin-right: 0px;
    }
    
    .nav{
        display: flex;
        max-height: 500px;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        flex-direction: column;
    }

    .logo{
        display: inline-block;
        height: 50px;
        width: 40%;
        overflow: hidden;
        margin-left: -60%;
        margin-right: 0px;
    }

    .logo img{
        height: 100%;
        object-fit: cover;
    }

    .lien-navigation{
        display: block;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-left: -40px;
        order: 2;
    }

    .lien-navigation li a{
        text-decoration: none;
        color: black;
        font-size: 16px;
    }

    .li1{
        display: block;
        width: 50%;
        height: 100%;
        text-align: center;
        margin-top: 0px;
    }

    .li2{
        display: block;
        width: 50%;
        height: 100%;
        text-align: center;
        margin-top: 0px;
    }

    nav ul li a{
        display: block;
        width: 100%;
        padding-top: 27px;
        padding-bottom: 27px;
        margin: 0px;
    }

    nav ul li a:hover{
        color: #007BFF;
        border-top: unset;
        border-bottom: 2px solid #007BFF;
    }

    .inscription{
        display: inline-block;
        font-size: 16px;
        padding: 20px;
        text-decoration: none;
        font-weight: bold;
        color: #007BFF;
        text-align: center;
        width: 40%;
        order: 1;
        margin-top: -50px;
        margin-right: -80%;
    }

    .inscription:hover{
        font-size: 18px;
        text-shadow: 0px 0px 3px #CCC;
    }
    
    .titre{
        width: 100%;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    span{
        font-weight: bold;
    }

    .titre1{
        min-width: 360px;
        max-width: 768px;
        background-color: white;
        margin: auto;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 24px;
        font-weight: bold;
        padding: 20px 20px 0px 20px;
    }
    
    .note{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
    }

    .note i{
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
        font-size: 12px;
        color: #007BFF;
        border-radius: 20px;
        border: 1px solid #AAA;
        text-align: center;
    }

    .note p{
        font-size: 14px;
        margin-top: 15px;
        margin-left: 8px;
    }
}
.filtres{
    display: flex;
    align-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 20px;
}

.p{
    font-size: 16px;
    font-weight: bold;
}

.elements-filtres{
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 30px; 
    border: 1px solid #DDD;
}

.elements-filtres:hover{
    cursor: pointer;
    color: #007BFF;
    box-shadow: 0px 0px 3px #CCC;
}

.elements-filtres i{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1px;
    background-color: #DEEBFF;
    font-size: 16px;
    color: #007BFF;
    border-radius: 32px;
    width: 32px;
    height: 32px;
    text-align: center;
}

.option{
    display: inline-block;
    padding: 0px 20px 0px 10px;
    font-size: 16px;
    font-weight: bold;
}

@media (max-width: 768px){
    .filtres{
        display: flex;
        align-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 20px;
    }
    
    .p{
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 0px;
    }
    
    .option{
        display: inline-block;
        padding: 5px 20px 5px 20px;
        font-size: 20px;
        font-weight: bold;
    }
}
.div3{
    background-color: #EEE;
    display: flex;
    max-width: 1200px;
    justify-content: flex-start;
    margin: auto;
    gap: 2%;
    padding: 2%;
}

.liste{
    display: block;
    width: 33%;
}

.div3 ul{
    list-style: none;
    font-size: 12px;
}

.tete-liste{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 15px;
}

.element-liste{
    margin: 10px 0px 10px 0px;
    font-size: 12px;
}

.element-liste:hover{
    cursor: pointer;
}

@media (max-width: 768px){
    .div3{
        background-color: #EEE;
        display: flex;
        max-width: 1200px;
        justify-content: flex-start;
        margin: auto;
        padding: 2%;
        gap: 20px;
        flex-direction: column;
    }

    .liste{
        display: block;
        width: 100%;
    }

    .div3 ul{
        list-style: none;
        font-size: 12px;
    }

    .tete-liste{
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    
    .element-liste{
        margin: 15px 0px 15px 0px;
        font-size: 16px;
    }
}
.div2{ /*Un "container" pour les divisions "hebergements" et "populaires"*/
    background-color: white;
    min-width: 480px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: auto;
    padding: 2%;
    margin-top: 0px;
    gap: 2%;
    justify-content: center;
}

.hebergement{
    display: inline-block;
    width: 60%;
    max-height: 1920px;
    background-color: #EEE;
    border-radius: 10px;
    padding: 2% 2%;
    margin-left: 0px;
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    gap: 20px;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    justify-content:space-between;
    flex: 0 0 auto;
    flex-shrink: 0;
}

.hebergement1{
    border-radius: 10px;
    width: 30%;
    height: 160px;
    background-color: #FFF;
    overflow: hidden;
    padding: 5px;
    box-shadow: 0px 0px 5px #AAA;
    margin-bottom: 0px;
    flex-grow: 1;
}

.hebergement1:hover{
    cursor: pointer;
    box-shadow: 0px 0px 10px #888;
}

.image{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    height: 60%;
}

.image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.p2{
    margin-top: 8px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
    font-weight: bold;
}

.p3{
    margin-top: 0px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
}

.bouton{
    display: inline-block;
    text-align: left;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    background-color: #EEE;
    border: none;
    padding: 10px 0px 20px 0px;
    margin: 10px 0px 10px 0px;
}

.bouton:hover{
    cursor: pointer;
    text-shadow: 0px 0px 2px #888;
}

.ratings{
    margin: 10px 10px;
}

.ratings i{
    color: #007BFF;
    font-size: 12px;
}

@media (max-width: 768px){
    .div2{
        background-color: white;
        min-width: 360px;
        max-width: 768px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: auto;
        padding: 0px;
        margin-top: 0px;
        gap: 20px;
        justify-content: center;
    }
    
    .hebergement{
        display: block;
        width: 100%;
        background-color: white;
        max-height: 19200px;
        border-radius: 10px;
        margin-left: 0px;
        margin-bottom: 20px;
        padding: 20px;
        display: flex;
        align-content: center;
        gap: 15px;
        flex-direction: row;
        flex-grow: 1;
        align-items: center;
        justify-content:space-between;
        flex: 0 0 auto;
        flex-shrink: 1;
        order: 2;
    }
    .hebergement1{
        border-radius: 30px;
        width: 90vw;
        height: 270px;
        background-color: white;
        overflow: hidden;
        padding: 5px;
        box-shadow: 0px 0px 5px #EEE;
    }

    .hebergement1:hover{
        cursor: pointer;
        box-shadow: 0px 0px 5px #CCC;
    }
    
    
    .p2{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 16px;
        font-weight: bold;
    }
    
    .p3{
        margin-top: 0px;
        margin-bottom: 5px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 16px;
    }
    
    .image{
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        overflow: hidden;
        height: 60%;
    }
    
    .bouton{
        display: inline-block;
        text-align: left;
        width: 100%;
        font-size: 22px;
        font-weight: bold;
        background-color: white;
        border: none;
        padding: 10px 0px 20px 0px;
        margin: 10px 0px 10px 0px;
    }

    .bouton:hover{
        cursor: pointer;
        text-shadow: 0px 0px 2px #CCC;
    }
    
    .ratings{
        margin: 25px 10px;
    }

    .ratings i{
        color: #007BFF;
        font-size: 16px;
    }
}
.populaires{
    display: inline-block;
    width: 30%;
    max-height: 1920px;
    background-color: #EEE;
    border-radius: 10px;
    padding: 20px 20px 20px 20px;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    margin-bottom: 20px;
    flex-shrink: 0;
}

.populaire1{
    border-radius: 10px;
    width: 95%;
    height: 120px;
    background-color: #FFF;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 5px;
    display: flex;
    box-shadow: 0px 0px 5px #AAA;
}

.populaire1:hover{
    cursor: pointer;
    box-shadow: 0px 0px 5px #888;
}

.image1{
    display: inline-block;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: hidden;
    height: 100%;
    width: 40%;
}

.image1 img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.descri{
    display: flex;
    display: inline-block;
    width: 69%;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
}

.p4{
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
    font-weight: bold;
}

.p5{
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
}

.ratings1{
    margin: 30% 10px 10px 10px;
}

.ratings1 i{
    color: #007BFF;
    font-size: 12px;
}

.ratings2{
    margin: 25% 10px 10px 10px;
}

.ratings2 i{
    color: #007BFF;
    font-size: 12px;
}

.en-tete{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}

.en-tete i{
    font-size: 16px;
    font-weight: bold;
}

.en-tete i:hover{
    font-size: 17px;
    cursor: pointer;
    text-shadow: 0px 0px 2px #888;
}

.titre2{
    display: inline-block;
    width: 70%;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
}

@media (max-width: 768px){
    .populaires{
        background-color: white;
        display: inline-block;
        width: 100%;
        max-height: 3840px;
        background-color: #EEE;
        border-radius: unset;
        padding: 5px 0px 20px 0px;
        display: flex;
        align-content: flex-start;
        gap: 15px;
        flex-wrap: wrap;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        margin-bottom: 0px;
        order: 1;
    }
    
    .populaire1{
        border-radius: 30px;
        width: 90vw;
        height: 180px;
        background-color: #FFF;
        overflow: hidden;
        padding: 5px;
        display: flex;
        box-shadow: 0px 0px 5px #AAA;
    }
    
    .image1{
        display: inline-block;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        overflow: hidden;
        height: 100%;
        width: 40%;
    }
    
    .p4{
        margin: 20px 20px 10px 20px;
        font-size: 16px;
        font-weight: bold;
    }

    .p5{
        margin: 0px 20px 10px 20px;
        font-size: 16px;
    }
    
    .ratings1{
        margin: 80px 20px 10px 20px;
    }

    .ratings1 i{
        color: #007BFF;
        font-size: 16px;
    }
    
    .ratings2{
        margin: 80px 20px 10px 20px;
    }

    .ratings2 i{
        color: #007BFF;
        font-size: 16px;
    }
    
    .titre2{
        width: 100%;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
        margin-left: 20px;
    }
    
    .en-tete{
        display: flex;
        width: 95vw;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }

    .en-tete i{
        font-size: 24px;
        font-weight: bold;
    }
    .en-tete i:hover{
        font-size: 25px;
        cursor: pointer;
    }
}

@media (max-width: 544px){
    .ratings2{
        margin: 65px 20px 10px 20px;
    }
}
.activites{
    background-color: white;
    min-width: 480px;
    max-width: 1200px;
    display: flex;
    align-content: center;
    gap: 3%;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 20px 20px 20px 20px;
    flex-wrap: wrap;
}

.activite1{
    border-radius: 10px;
    margin-bottom: 20px;
    width: 22.5%;
    height: 400px;
    box-shadow: 0px 0px 5px #EEE;
    flex: 0 0 auto;
}

.activite1:hover{
    cursor: pointer;
    box-shadow: 0px 0px 5px #CCC;
}

.image2{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    height: 350px;
    width: 100%;
}

.image2 img{
    height: 100%;
    object-fit: cover;
}

.box{   /*Boîte de même hauteur que les autres conteneurs d'activités pour mettre deux activités*/
    border-radius: 10px;
    margin-bottom: 20px;
    width: 22.5%;
    max-height: 400px;
    flex: 0 0 auto;
}

.activite2{
    border-radius: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 230px;
    box-shadow: 0px 0px 5px #EEE;
}

.activite2:hover{
    cursor: pointer;
    box-shadow: 0px 0px 5px #CCC;
}

.image3{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    height: 180px;
    width: 100%;
    align-items: center;
}

.image3 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.activite3{
    border-radius: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 150px;
    box-shadow: 0px 0px 5px #EEE;
}

.activite3:hover{
    cursor: pointer;
    box-shadow: 0px 0px 5px #CCC;
}

.image4{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    height: 100px;
    width: 100%;
}

.image4 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.activite4{
    border-radius: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 190px;
    box-shadow: 0px 0px 5px #EEE;
}

.activite4:hover{
    cursor: pointer;
    box-shadow: 0px 0px 5px #CCC;
}

.image5{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    height: 140px;
    width: 100%;
}

.image5 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px){
    .activites{
        background-color: white;
        min-width: 360px;
        max-width: 768px;
        display: flex;
        align-content: center;
        gap: 20px;
        flex-grow: 1;
        align-items: center;
        margin: auto;
        padding: 20px 20px 20px 20px;
        flex-wrap: wrap;
    }
    .activite1{
        border-radius: 30px;
        margin-bottom: 20px;
        width: 90vw;
        height: 270px;
        box-shadow: 0px 0px 5px #EEE;
        flex: 0 0 auto;
    }
    
    .image2{
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        margin-bottom: 20px;
        overflow: hidden;
        height: 80%;
        width: 100%;
    }
    
    .image2 img{
        width: 100%;
        object-fit: cover;
    }
    
    .box{
        display: flex;
        gap: 20px;
        flex-direction: column;
        border-radius: 30px;
        margin-bottom: 20px;
        width: 100%;
        max-height: 800px;
        flex: 0 0 auto;
    }
    
    .activite2{
        border-radius: 30px;
        margin-bottom: 20px;
        width: 90vw;
        height: 270px;
        box-shadow: 0px 0px 5px #EEE;
        flex: 0 0 auto;
    }
    
    .image3{
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        margin-bottom: 20px;
        overflow: hidden;
        height: 80%;
        width: 100%;
    }
    
    .activite3{
        border-radius: 30px;
        margin-bottom: 20px;
        width: 90vw;
        height: 270px;
        box-shadow: 0px 0px 5px #EEE;
        flex: 0 0 auto;
    }
    
    .image4{
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        margin-bottom: 20px;
        overflow: hidden;
        height: 80%;
        width: 100%;
    }
    
    .activite4{
        border-radius: 30px;
        margin-bottom: 20px;
        width: 90vw;
        height: 270px;
        box-shadow: 0px 0px 5px #EEE;
        flex: 0 0 auto;
    }
    
    .image5{
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        margin-bottom: 20px;
        overflow: hidden;
        height: 80%;
        width: 100%;
    }
}
</style>
