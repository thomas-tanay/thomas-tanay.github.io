---
layout: page
title: Face Verification and Clustering
permalink: /face-verification/
---

<img class="header-image" src="/img/bill.png">

Location: iProov, Elizabeth House, 39 York Road, SE1 7NQ, London (UK).

Supervisor: Dr. Andrew Newell.

<hr>

<h1> Context </h1>

The combination of efficient data collection techniques and the use of deep convolutional neural networks allowing end-to-end learning 
has recently resulted in superhuman performance in face verification and clustering [<a href="https://arxiv.org/pdf/1411.7923.pdf">1</a>,<a href="https://arxiv.org/pdf/1503.03832.pdf">2</a>,<a href="https://www.robots.ox.ac.uk/%7Evgg/publications/2015/Parkhi15/parkhi15.pdf">3</a>].

This new approach is enabling new types of studies. 
Below I briefly describe how to use a pre-trained network to perform automatic labeling of a new dataset,
what the principal component of a standard dataset looks like in feature space, and who are the actresses and actors who most look like each other on the IMDb website
(according to a given network).

Note: these results were obtained in parallel to my actual work at iProov.

<br/>

<h1> Automatic Labeling </h1>

<u> 1) Download a pre-trained network: </u>

<ul>
  <li> <a href="https://cmusatyalab.github.io/openface/"> OpenFace (Torch) </a>  </li>
  <li> <a href="https://github.com/davidsandberg/facenet/"> FaceNet (Tensor Flow) </a>  </li>
  <li> <a href="http://www.vlfeat.org/matconvnet/pretrained/"> VGG-Face (MatConvNet) </a> </li>
</ul>

<br/>

<u> 2) Download many pictures: </u>

For instance by Googling "Bill Murray".

<img width="600" src="/img/faces1.png">

<br/>

<u> 3) Extract the faces: </u>
 
For instance by using the simple Haar Cascades face detector from openCV.
 
<img width="600" src="/img/faces2.png">

<br/>

<u> 4) Remove the junk images: </u>

The openCV face detector performs relatively poorly. Fortunately, the "junk images" can easily be filtered out: 
their feature representations through the face network are "flatter" than the feature representations of actual faces (their norms d are smaller).

<img width="600" src="/img/faces3.png">

<br/>

<u> 5) Remove anyone who's not Bill Murray: </u>

The "Bill Murray" cluster can be isolated by using a standard algorithm such as DBSCAN.

<img width="600" src="/img/faces4.png">

<br/> 

<h1> First Principal Component </h1>

Face networks are typically trained by enforcing <em>local</em> constraints in feature space: two pictures of a same individual should have feature representations which are close 
from each other and two pictures of different individuals should have feature representations which are far from each other. 
Here, we propose to study the <em>global</em> distribution resulting from these <em>local</em> constraints by computing the first principal component 
of the entire <em>Labeled Faces in the Wild</em> dataset.

Interestingly, we obtain a direction that separates the gender of individuals fairly reliably 
(note that <em>Labeled Faces in the Wild</em> is strongly imbalanced in favor of men):

<img width="700" src="/img/1stPC.png">

In other words, the network has spontaneously discovered the concept of gender: 
by learning to recognize identities, it has found that the population is constituted of two groups (women and men).

<br/>

<h1> Face Similarities </h1>

We now compute the pairwise distances between the feature representations of the profile pictures of actresses and actors on the IMDb website (more precisely,
the actresses and actors in the <em>CASIA WebFace database</em>).

We show below the pairs of profile pictures corresponding to the smallest distances (i.e. the individuals who look most like each other according to our pre-trained network):

<pre style="margin-top: 30px; margin-bottom: 30px;">
<img style="margin: 0px" width="1400" src="/img/FaceSimilarities.png">
</pre>

We can make two observations:
<ul>
  <li> The two pairs of individuals who look most like each other are twins. </li>
  <li> Most of the pairs of individuals found are either women or belong to Black and Asian ethnic groups, <em>even though these groups are under-represented in the CASIA WebFace database</em>. <br/>
  In other words, the pre-trained network is less sensitive to female and non-White facial features&mdash;a very serious algorithmic bias more and more recognized: <br/>
  <a href="https://www.nytimes.com/2018/02/09/technology/facial-recognition-race-artificial-intelligence.html">
  Facial Recognition Is Accurate, if You’re a White Guy (New York Times)
  </a>
  </li>
</ul>





