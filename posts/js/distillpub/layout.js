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
  grid-template-columns: [screen-start] 16px [page-start kicker-start text-start gutter-start middle-start] 1fr [text-end page-end gutter-end kicker-end middle-end] 16px [screen-end];
  grid-column-gap: 0px;
}

.grid {
  display: grid;
  grid-column-gap: 0px;
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
    grid-template-columns: [screen-start] 1fr [page-start kicker-start middle-start text-start kicker-end] 560px [text-end gutter-start middle-end page-end gutter-end] 1fr [screen-end];
    grid-column-gap: 0px;
  }

  .grid {
    grid-column-gap: 0px;
  }
}

@media(min-width: 1260px) {
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
    grid-template-columns: [screen-start] 1fr [page-start kicker-start] 60px [middle-start] 60px [text-start kicker-end] 760px [text-end gutter-start] 60px [middle-end] 60px [page-end gutter-end] 1fr [screen-end];
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