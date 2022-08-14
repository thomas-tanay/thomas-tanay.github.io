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
  font-size: 30px;
  font-weight: 700;
  line-height: 1.1em;
  margin: 40px 0 0.5rem;
}

d-title p {
  font-weight: 300;
  font-size: 14px;
  line-height: 1.55em;
  grid-column: text;
}

@media(min-width: 460px) {
  d-title h1 {
    font-size: 40px;
  }

  d-title p {
    font-size: 16px;
  }
}

@media(min-width: 1260px) {
  d-title h1 {
    font-size: 50px;
  }

  d-title p {
    font-size: 1.2rem;
  }
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
