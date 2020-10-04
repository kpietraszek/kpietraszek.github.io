import React from "react"

const EcoFriendlyFramework = () => (
  <>
    <h2>Which frontend framework is the most eco-friendly?</h2>
    <p>
      Being eco-friendly is really trendy nowadays. Both individuals and
      enterprises are trying to be more green. As a society, we have moved from
      plastic straws to paper or noodle ones in just a few months. Big chain
      stores like Lidl are trying to greenwash themselves by reducing plastic in
      their plastic containers. The trend is that significant and beneficial
      that petrol companies are changing their brand colors to literally green
      to appear as more eco. As you can see, it really got out of hands in many
      cases. And it made me wonder if every industry will be affected by it? Is
      it even possible to make web development more green? Let’s find out.
    </p>

    <h4>Green Internet</h4>
    <p>
      There is an assumption that certain processes are more eco-friendly when
      moved to the online world. But are they? It really took me by surprise but{" "}
      <a href="https://storage.googleapis.com/planet4-international-stateless/2010/03/f2954209-make-it-green-cloud-computing.pdf">
        the oldest report
      </a>{" "}
      that I found on “green IT” was published in 2010. Even though the research
      doesn’t go into many details and it doesn’t split web companies like Yahoo
      or Facebook from hardware ones like Microsoft or Apple, it shows how
      energy-demanding the IT industry is. The next few reports on this topic
      made by Greenpeace focus mostly on what source of energy the IT companies
      use and how it affects CO2 emission, so let’s skip that, and let’s move on
      to 2012’s report named{" "}
      <a href="https://storage.googleapis.com/planet4-international-stateless/2012/04/e7c8ff21-howcleanisyourcloud.pdf">
        How Clean is Your Cloud?
      </a>
      . This research is interesting because it indicates how critical web
      performance is in relation to energy consumption and from this point, we
      can’t call software green if it performs poorly. It is explored even more
      deeply in a book from 2016 called{" "}
      <a href="https://www.oreilly.com/library/view/designing-for-sustainability/9781491935767/">
        Designing for Sustainability
      </a>{" "}
      and adds a mobile-first approach to the green requirements as mobiles are
      more eco-friendly than standard computers. Having discussed what metrics
      define the “greenness” let’s move on to benchmarking
    </p>

    <h4>Benchmarking</h4>
    <p>
      As base projects we will use nothing else than the mother of all demo
      apps:{" "}
      <a href="https://github.com/gothinkster/realworld">Real-world apps</a> and
      to get the final metrics we will use{" "}
      <a href="https://www.surfgreen.dev/">surfgreen</a> as it provides
      information about CO2 Emission and burned coal
    </p>

    <table>
      <thead>
        <tr>
          <th>Framework</th>
          <th>Performance score</th>
          <th>Progressive Web App Score</th>
          <th>Green Efficiency Score</th>
          <th>Number of transferred mega baits to load the page</th>
          <th>Grams of burned coal</th>
          <th>Grams of CO2 Emission</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Angular</td>
          <td>84</td>
          <td>48</td>
          <td>93</td>
          <td className="highest">0</td>
          <td className="lowest">2</td>
          <td>5</td>
        </tr>

        <tr>
          <td>React + Redux</td>
          <td>84</td>
          <td className="lowest">37</td>
          <td className="highest">94</td>
          <td className="highest">0</td>
          <td className="highest">1</td>
          <td className="highest">4</td>
        </tr>

        <tr>
          <td>Vue + Vuex</td>
          <td>89</td>
          <td className="highest">100</td>
          <td>93</td>
          <td className="highest">0</td>
          <td className="lowest">2</td>
          <td>5</td>
        </tr>

        <tr>
          <td>VanillaJS</td>
          <td className="highest">93</td>
          <td>33</td>
          <td>94</td>
          <td className="highest">0</td>
          <td className="highest">1</td>
          <td className="highest">4</td>
        </tr>

        <tr>
          <td>Next</td>
          <td className="highest">79</td>
          <td>56</td>
          <td className="highest">94</td>
          <td className="highest">0</td>
          <td className="highest">1</td>
          <td className="highest">4</td>
        </tr>

        <tr>
          <td>Nuxt</td>
          <td className="highest">88</td>
          <td>52</td>
          <td>92</td>
          <td className="highest">0</td>
          <td className="lowest">2</td>
          <td>5</td>
        </tr>

        <tr>
          <td>AngularJS</td>
          <td className="lowest">47</td>
          <td className="lowest">37</td>
          <td className="lowest">90</td>
          <td className="lowest">1</td>
          <td className="lowest">2</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>

    <h4>Conclusion</h4>
    <p>
      Looking at the table it’s clear that angularJS is the biggest loser but
      it’s hard to point out one winner. VanillaJS has the majority of “wins”
      but we all know that writing in pure js can be time-consuming and it
      doesn’t scale as well as react or vue. Thanks to webpack all of the modern
      js frameworks are pretty light and the differences between them are so
      small that we can omit them. I would say that as long as you don’t use
      jQuery, you don’t use million items for loops and, in general, you keep
      the app's performance in your mind you can, without a doubt, call yourself
      an eco-friendly developer.
    </p>
  </>
)

export default EcoFriendlyFramework
