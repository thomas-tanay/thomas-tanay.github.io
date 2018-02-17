---
layout: page
title: Stochastic Diffusion Search <br/> applied to Trees
permalink: /SDST/
---

<img width="700" src="/img/gameTree.png">

Location: Computing Department, Goldsmiths, University of London (UK).

Supervisor: Prof. Mark Bishop.

<hr>

<h1> Abstract </h1>

Stochastic Diffusion Search (SDS) is a swarm intelligence heuristic providing a population-based solution to the exploration/exploitation dilemma. SDS agents perform cheap, 
partial evaluations of candidate solutions (test phase) before sharing information about their hypotheses through direct one-to-one communication (diffusion phase).
The repetition of these two phases leads to the emergence of high-quality solutions identifiable in clusters of agents sharing the same hypotheses. 

In Stochastic Diffusion Search applied to Trees (SDST), a meta-population of agents explores a game-tree in a Monte-Carlo Tree Search style &mdash; ultimately converging to the 
optimal solution. Each node of the game-tree is solved through a standard application of SDS, but the convergence of the root node population is coupled to the convergence 
of populations down the game-tree. SDST agents have a natural tendency to descend in the population pointed by their hypothesis, but they spontaneously move back up if they are
not contacted by an agent above.

These simple rules lead to the emergence of complex dynamics characterized by a meta-level of swarm behaviour (a swarm of populations or a meta-population).
As a two-leveled distributed system, this meta-population can be viewed as a loose metaphor for the hierarchical organization of the brain, 
from neurons and cortical columns to Brodmann areas and cerebral lobes.  

<h1> Animation </h1>

<iframe src="https://www.youtube.com/embed/gK1Pm0hozrw?rel=0&amp;controls=0&amp;showinfo=0" width="700" height="394" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

<br/>

In the animation above, SDST is applied to a binary game tree of depth 20 designed such that:
<ul>
 	<li>If <strong>Black</strong> moves <em>Right</em>, most of the possible outcomes (90%) are favorable to <strong>Black</strong>.</li>
 	<li>If <strong>Black</strong> moves <em>Left</em>, most of the possible outcomes (90%) are favorable to <strong>White</strong>.</li>
</ul>
However:
<ul>
 	<li>If <strong>Black</strong> moves <em>Right</em>, there exists a winning strategy for <strong>White</strong>.</li>
 	<li>If <strong>Black</strong> moves <em>Left</em>, there exists a winning strategy for <strong>Black</strong>.</li>
</ul>

Solving this game-tree requires good tactical play: moving <em>Right</em> is statistically better for <strong>Black</strong>, 
but moving <em>Left</em> is the only guaranteed path to victory.

In the animation, the width of each branch is proportional to the number of agents in the parent node population supporting the move leading to the child node population. 
We see that at first, most of the agents are allocated to the exploration of the <em>Right</em> part of the game tree. This lasts until the winning strategy for 
<strong>White</strong> is found (always playing <em>Left</em>) and the agents then shift to the exploration of the <em>Left</em> part of the game tree. At the end, the 
winning strategy for <strong>Black</strong> is found (always playing <em>Left</em>). The fact that all the agents in the root node population converge to the <em>Left</em> 
move indicates that <strong>Black</strong> should play <em>Left</em>.

(coded in C++, animated using openFrameworks)

<h1> More </h1>

<a href="{{ site.baseurl }}/documents/bishop2016hex.pdf"> Bishop, J. M., Nasuto, S. J., Tanay, T., Roesch, E. B., & Spencer, M. C. (2016). HeX and the single anthill: playing games with Aunt Hillary. In Fundamental Issues of Artificial Intelligence (pp. 369-390). Springer, Cham.</a>

<a href="{{ site.baseurl }}/documents/tanay2013stochastic.pdf"> Tanay, T., Bishop, J. M., Nasuto, S. J., Roesch, E. B., & Spencer, M. C. (2013). Stochastic diffusion search applied to trees: a swarm intelligence heuristic performing monte-carlo tree search. In Proceedings of the AISB. </a>

<a href="{{ site.baseurl }}/documents/dissertation.pdf"> Tanay, T. (2012). Game-Tree Exploration using Stochastic Diffusion Search (Master's thesis). </a>

