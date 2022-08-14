  var base = "/*
 * Copyright 2018 The Distill Template Authors
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

html {
  font-size: 14px;
\tline-height: 1.6em;
  /* font-family: \"Libre Franklin\", \"Helvetica Neue\", sans-serif; */
  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Arial, sans-serif;
  /*, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";*/
  text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

@media(min-width: 768px) {
  html {
    font-size: 16px;
  }
}

body {
  margin: 0;
}

figure {
  margin: 0;
}

table {
\tborder-collapse: collapse;
\tborder-spacing: 0;
}

table th {
\ttext-align: left;
}

table thead {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

table thead th {
  padding-bottom: 0.5em;
}

table tbody :first-child td {
  padding-top: 0.5em;
}

pre {
  overflow: auto;
  max-width: 100%;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

sup, sub {
  vertical-align: baseline;
  position: relative;
  top: -0.4em;
  line-height: 1em;
}

sub {
  top: 0.4em;
}

.kicker,
.marker {
  font-size: 15px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
}


/* Headline */

@media(min-width: 1024px) {
  d-title h1 span {
    display: block;
  }
}

/* Figure */

figure {
  position: relative;
  margin-bottom: 2.5em;
  margin-top: 1.5em;
}

figcaption+figure {

}

figure img {
  width: 100%;
}

figure svg text,
figure svg tspan {
}

figcaption,
.figcaption {
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 1.5em;
}

@media(min-width: 1024px) {
figcaption,
.figcaption {
    font-size: 13px;
  }
}

figure.external img {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 18px;
  box-sizing: border-box;
}

figcaption a {
  color: rgba(0, 0, 0, 0.6);
}

figcaption b,
figcaption strong, {
  font-weight: 600;
  color: rgba(0, 0, 0, 1.0);
}
";

  var layout = "/*
 * Copyright 2018 The Distill Template Authors
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

@supports not (display: grid) {
  .base-grid,
  distill-header,
  d-title,
  d-abstract,
  d-article,
  d-appendix,
  distill-appendix,
  d-byline,
  d-footnote-list,
  d-citation-list,
  distill-footer {
    display: block;
    padding: 8px;
  }
}

.base-grid,
distill-header,
d-title,
d-abstract,
d-article,
d-appendix,
distill-appendix,
d-byline,
d-footnote-list,
d-citation-list,
distill-footer {
  display: grid;
  justify-items: stretch;
  grid-template-columns: [screen-start] 8px [page-start kicker-start text-start gutter-start middle-start] 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr [text-end page-end gutter-end kicker-end middle-end] 8px [screen-end];
  grid-column-gap: 8px;
}

.grid {
  display: grid;
  grid-column-gap: 8px;
}

@media(min-width: 768px) {
  .base-grid,
  distill-header,
  d-title,
  d-abstract,
  d-article,
  d-appendix,
  distill-appendix,
  d-byline,
  d-footnote-list,
  d-citation-list,
  distill-footer {
    grid-template-columns: [screen-start] 1fr [page-start kicker-start middle-start text-start] 45px 45px 45px 45px 45px 45px 45px 45px [ kicker-end text-end gutter-start] 45px [middle-end] 45px [page-end gutter-end] 1fr [screen-end];
    grid-column-gap: 16px;
  }

  .grid {
    grid-column-gap: 16px;
  }
}

@media(min-width: 1024px) {
  .base-grid,
  distill-header,
  d-title,
  d-abstract,
  d-article,
  d-appendix,
  distill-appendix,
  d-byline,
  d-footnote-list,
  d-citation-list,
  distill-footer {
    grid-template-columns: [screen-start] 1fr [page-start kicker-start] 50px [middle-start] 50px [text-start kicker-end] 50px 50px 50px 50px 50px 50px 50px 50px [text-end gutter-start] 50px [middle-end] 50px [page-end gutter-end] 1fr [screen-end];
    grid-column-gap: 16px;
  }

  .grid {
    grid-column-gap: 16px;
  }
}

@media(min-width: 1180px) {
  .base-grid,
  distill-header,
  d-title,
  d-abstract,
  d-article,
  d-appendix,
  distill-appendix,
  d-byline,
  d-footnote-list,
  d-citation-list,
  distill-footer {
    grid-template-columns: [screen-start] 1fr [page-start kicker-start] 60px [middle-start] 60px [text-start kicker-end] 60px 60px 60px 60px 60px 60px 60px 60px [text-end gutter-start] 60px [middle-end] 60px [page-end gutter-end] 1fr [screen-end];
    grid-column-gap: 40px;
  }

  .grid {
    grid-column-gap: 40px;
  }
}




.base-grid {
  grid-column: screen;
}

/* .l-body,
d-article > *  {
  grid-column: text;
}

.l-page,
d-title > *,
d-figure {
  grid-column: page;
} */

.l-gutter {
  grid-column: gutter;
}

.l-text,
.l-body {
  grid-column: text;
}

.l-page {
  grid-column: page;
}

.l-body-outset {
  grid-column: middle;
}

.l-page-outset {
  grid-column: page;
}

.l-screen {
  grid-column: screen;
}

.l-screen-inset {
  grid-column: screen;
  padding-left: 16px;
  padding-left: 16px;
}


/* Aside */

d-article aside {
  grid-column: gutter;
  font-size: 12px;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.6)
}

@media(min-width: 768px) {
  aside {
    grid-column: gutter;
  }

  .side {
    grid-column: gutter;
  }
}
";

  var print = "/*
 * Copyright 2018 The Distill Template Authors
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

@media print {

  @page {
    size: 8in 11in;
    @bottom-right {
      content: counter(page) \" of \" counter(pages);
    }
  }

  html {
    /* no general margins -- CSS Grid takes care of those */
  }

  p, code {
    page-break-inside: avoid;
  }

  h2, h3 {
    page-break-after: avoid;
  }

  d-header {
    visibility: hidden;
  }

  d-footer {
    display: none!important;
  }

}
";

  var byline = "/*
 * Copyright 2018 The Distill Template Authors
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

d-byline {
  contain: style;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
  line-height: 1.8em;
  padding: 1.5rem 0;
  min-height: 1.8em;
}


d-byline .byline {
  grid-template-columns: 1fr 1fr;
  grid-column: text;
}

@media(min-width: 768px) {
  d-byline .byline {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

d-byline .authors-affiliations {
  grid-column-end: span 2;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1em;
}

@media(min-width: 768px) {
  d-byline .authors-affiliations {
    margin-bottom: 0;
  }
}

d-byline h3 {
  font-size: 0.6rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
  text-transform: uppercase;
}

d-byline p {
  margin: 0;
}

d-byline a,
d-article d-byline a {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  border-bottom: none;
}

d-article d-byline a:hover {
  text-decoration: underline;
  border-bottom: none;
}

d-byline p.author {
  font-weight: 500;
}

d-byline .affiliations {

}
";

  var article = "/*
 * Copyright 2018 The Distill Template Authors
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

d-article {
  contain: layout style;
  overflow-x: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 2rem;
  color: rgba(0, 0, 0, 0.8);
}

d-article > * {
  grid-column: text;
}

@media(min-width: 768px) {
  d-article {
    font-size: 16px;
  }
}

@media(min-width: 1024px) {
  d-article {
    font-size: 16px;
    line-height: 1.5em;
  }
}


/* H2 */


d-article .marker {
  text-decoration: none;
  border: none;
  counter-reset: section;
  grid-column: kicker;
  line-height: 1.5em;
}

d-article .marker:hover {
  border: none;
}

d-article .marker span {
  padding: 0 3px 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  top: 4px;
}

d-article .marker:hover span {
  color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
}

d-article h2 {
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25em;
  margin: 2rem 0 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
}

@media(min-width: 1024px) {
  d-article h2 {
    font-size: 30px;
  }
}

/* H3 */

d-article h3 {
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4em;
  margin-bottom: 1em;
  margin-top: 2em;
}

@media(min-width: 1024px) {
  d-article h3 {
    font-size: 20px;
  }
}

/* H4 */

d-article h4 {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.4em;
}

d-article a {
  color: inherit;
}

d-article p,
d-article ul,
d-article ol,
d-article blockquote {
  margin-top: 0;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}

d-article blockquote {
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  padding-left: 2em;
  font-style: italic;
  color: rgba(0, 0, 0, 0.6);
}

d-article a {
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-decoration: none;
}

d-article a:hover {
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
}

d-article .link {
  text-decoration: underline;
  cursor: pointer;
}

d-article ul,
d-article ol {
  padding-left: 24px;
}

d-article li {
  margin-bottom: 1em;
  margin-left: 0;
  padding-left: 0;
}

d-article li:last-child {
  margin-bottom: 0;
}

d-article pre {
  font-size: 14px;
  margin-bottom: 20px;
}

d-article hr {
  grid-column: screen;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 60px;
  margin-bottom: 60px;
}

d-article section {
  margin-top: 60px;
  margin-bottom: 60px;
}

d-article span.equation-mimic {
  font-family: georgia;
  font-size: 115%;
  font-style: italic;
}

d-article > d-code,
d-article section > d-code  {
  display: block;
}

d-article > d-math[block],
d-article section > d-math[block]  {
  display: block;
}

@media (max-width: 768px) {
  d-article > d-code,
  d-article section > d-code,
  d-article > d-math[block],
  d-article section > d-math[block] {
      overflow-x: scroll;
      -ms-overflow-style: none;  // IE 10+
      overflow: -moz-scrollbars-none;  // Firefox
  }

  d-article > d-code::-webkit-scrollbar,
  d-article section > d-code::-webkit-scrollbar,
  d-article > d-math[block]::-webkit-scrollbar,
  d-article section > d-math[block]::-webkit-scrollbar {
    display: none;  // Safari and Chrome
  }
}

d-article .citation {
  color: #668;
  cursor: pointer;
}

d-include {
  width: auto;
  display: block;
}

d-figure {
  contain: layout style;
}

/* KaTeX */

.katex, .katex-prerendered {
  contain: style;
  display: inline-block;
}

/* Tables */

d-article table {
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

d-article table th {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

d-article table td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

d-article table tr:last-of-type td {
  border-bottom: none;
}

d-article table th,
d-article table td {
  font-size: 15px;
  padding: 2px 8px;
}

d-article table tbody :first-child td {
  padding-top: 2px;
}
";

  var title = "/*
 * Copyright 2018 The Distill Template Authors
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

d-title {
  padding: 0rem 0 1.5rem;
  contain: layout style;
  overflow-x: hidden;
}

@media(min-width: 768px) {
  d-title {
    padding: 0rem 0 1.5rem;
  }
}

d-title h1 {
  grid-column: text;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1em;
  margin: 40px 0 0.5rem;
}

@media(min-width: 768px) {
  d-title h1 {
    font-size: 50px;
  }
}

d-title p {
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.55em;
  grid-column: text;
}

d-title .status {
  margin-top: 40px;
  font-size: 12px;
  color: #009688;
  opacity: 0.8;
  grid-column: kicker;
}

d-title .status span {
  line-height: 1;
  display: inline-block;
  padding: 6px 0;
  border-bottom: 1px solid #80cbc4;
  font-size: 11px;
  text-transform: uppercase;
}
";
